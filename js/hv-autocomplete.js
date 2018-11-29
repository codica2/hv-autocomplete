class HVAutocomplete {
  constructor(config) {
    this.config = config;
    this.input = config.input;
    this.data = config.data;
    this.divResult;
    this.divWrap;

    this.checkOnType(this.config);
  }

  checkOnType(config) {
    let headerError = "HV-Autcomplete crash :(\n\n";

    for (let key in config) {
      switch (key) {
        case "data":
          let isChecked;
          if (Array.isArray(config[key])) isChecked = true;

          if (typeof config[key] === "object") isChecked = true;

          if (typeof config[key] === "function") isChecked = true;

          if (!isChecked) {
            throw new Error(
              headerError +
                ' Option "data" must be an Object or Array!\n Please, check on correctly data types.'
            );
          }
          break;
        case "input":
          if (config.input.tagName !== "INPUT") {
            throw new Error(
              headerError +
                ' Option "input" must be DOM Element <input />!\n Please, check on correctly data types.'
            );
          }
          break;
        case "maxOptions":
          if (typeof config.maxOptions !== "number") {
            throw new Error(
              headerError +
                ' Option "maxOptions" must be a Number!\n Please, check on correctly data types.'
            );
          }
          break;
        case "horizontal":
          if (typeof config.horizontal !== "boolean") {
            throw new Error(
              headerError +
                ' Option "horizontal" must be a Boolean!\n Please, check on correctly data types.'
            );
          }
          break;
        case "globalSearch":
          if (typeof config.globalSearch !== "boolean") {
            throw new Error(
              headerError +
                ' Option "globalSearch" must be a Boolean!\n Please, check on correctly data types.'
            );
          }
          break;
        case "resultClass":
          if (typeof config.resultClass !== "string") {
            throw new Error(
              headerError +
                ' Option "resultClass" must be a String!\n Please, check on correctly data types.'
            );
          }
          break;
        case "resultStyles":
          if (typeof config.resultStyles !== "object") {
            throw new Error(
              headerError +
                ' Option "resultStyles" must be a Object!\n Please, check on correctly data types.'
            );
          }
          break;
        case "onOptionClick":
          if (typeof config.onOptionClick !== "function") {
            throw new Error(
              headerError +
                ' Option "onOptionClick" must be a Function!\n Please, check on correctly data types.'
            );
          }
          break;
      }
    }

    return this.initialize(config);
  }

  initialize(config) {
    if (status !== "error") {
      this.defaultConfig = {
        resultClass: config.resultClass ? config.resultClass : "hv-result",
        inputClass: config.inputClass ? config.inputClass : "hv-shell",
        maxOptions: config.maxOptions === undefined ? 5 : config.maxOptions,
        onOptionClick: config.onOptionClick && config.onOptionClick,
        prefix:
          this.input.getAttribute("id") || this.input.getAttribute("class")
      };

      this.build();

      new HVAutocompleteEvents(
        this.input,
        this.divResult,
        this.divWrap,
        this.data,
        this.config,
        this.defaultConfig
      );
    }
  }

  build() {
    this.divResult = document.createElement("div");
    this.divResult.setAttribute("id", "hv-result-" + this.defaultConfig.prefix);
    this.divResult.setAttribute("class", this.defaultConfig.resultClass);

    this.createWrap();
    this.configureStyles();
  }

  createWrap() {
    let divWrap = document.createElement("div"),
      parent = this.input.parentNode;
    divWrap.style.position = "relative";

    parent.replaceChild(divWrap, this.input);

    divWrap.appendChild(this.input);
    divWrap.appendChild(this.divResult);

    this.divWrap = divWrap;
  }

  configureStyles() {
    const {
      resultClass,
      resultStyles,
      inputStyles,
      horizontal,
      data
    } = this.config;

    const DEFAULT_STYLES_RESULT = {
      position: "absolute",
      top: this.input.clientHeight,
      width: this.input.clientWidth + "px",
      left: "0px",
      display: "none",
      backgroundColor: "#fff",
      boxSizing: "border-box"
    };

    const DEFAULT_STYLES_INPUT = {
      boxSizing: "border-box"
    };

    let newResultStyles = {};

    if (resultClass) {
      const STYLES_IF_HAVE_CLASS = {
        position: "absolute",
        top: this.input.clientHeight,
        left: "0px",
        display: "none"
      };

      this.setStyles(this.divResult, STYLES_IF_HAVE_CLASS);
    } else {
      this.setStyles(this.divResult, DEFAULT_STYLES_RESULT);
    }

    if (horizontal) {
      newResultStyles.display = "flex";
    }

    if (Array.isArray(data)) {
      newResultStyles.padding = 0;
    }

    if (resultStyles) {
      this.setStyles(this.divResult, resultStyles);
    }

    this.setStyles(this.input, DEFAULT_STYLES_INPUT);
    this.divResult.style.display = "none";
  }

  setStyles(elem, styles) {
    for (let key in styles) {
      elem.style[key] = styles[key];
    }
  }
}

class HVAutocompleteEvents {
  constructor(input, divResult, divWrap, data, config, defaultConfig) {
    this.blockResult = [];
    this.input = input;
    this.divResult = divResult;
    this.divWrap = divWrap;
    this.config = config;
    this.defaultConfig = defaultConfig;
    this.result;

    input.addEventListener("mousedown", () => {
      this.lifeCicle(data);
    });

    input.addEventListener("keyup", () => {
      if (typeof data === "function") {
        this.asyncRequest(data(this.input));
      } else {
        this.lifeCicle(data);
      }
    });

    this.clickOutBlock(divResult);
  }

  asyncRequest(data) {
    const url = data.url;
    const method = data.method;

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = xhttp.responseText;
        data.success && data.success(response);

        let isChecked;
        if (Array.isArray(response)) isChecked = true;

        if (typeof response === "object") isChecked = true;

        if (!isChecked) {
          console.error(
            'HV-Autcomplete crash :(\n\n Option "data" must be a Object or Array!\n Please, check your type data.'
          );
        } else if (this.status !== 200) {
          this.lifeCicle(response);
        }
      }
    };

    xhttp.open(method, url, true);
    xhttp.send();
  }

  clickOutBlock(divResult) {
    this.input.addEventListener("click", e => {
      this.clickOnWrap(e);
    });

    divResult.addEventListener("click", e => {
      this.clickOnWrap(e);
    });

    document.addEventListener("click", () => {
      if (divResult) {
        divResult.style.display = "none";
      }
    });
  }

  clickOnWrap(e) {
    if (e) {
      e.stopPropagation();
    } else {
      window.event.cancelBubble = true;
    }

    this.divResult.style.display =
      this.result && this.result.length > 0
        ? this.checkHorizontalConfig()
        : "none";
  }

  lifeCicle(data) {
    this.resetChildNodes();

    const isCategories = Array.isArray(data);
    const isInputEmpty = this.input.value;

    if (isInputEmpty || this.config.globalSearch) {
      if (!isCategories) {
        this.result = this.createWithCategoryResult(data);
      } else {
        this.result = this.createDefaultResult(data, "no-category");
      }

      this.renderResult(this.result);
    } else {
      this.divResult.style.display = "none";
    }
  }

  renderResult(result) {
    if (result.length !== 0) {
      for (let i = 0; i < result.length; i++) {
        this.divResult.appendChild(result[i]);
      }
      this.divResult.style.display = this.checkHorizontalConfig();
    } else {
      this.divResult.style.display = "none";
    }
  }

  checkHorizontalConfig() {
    return this.config.horizontal ? "flex" : "block";
  }

  resetChildNodes() {
    this.result = null;
    while (this.divResult.firstChild) {
      this.divResult.removeChild(this.divResult.firstChild);
    }
  }

  createWithCategoryResult(data) {
    let result = [],
      keysData = Object.keys(data);

    for (let i = 0; i < keysData.length; i++) {
      let isHaveCategory = data[keysData[i]].length !== 0;

      if (isHaveCategory) {
        let buildResult = this.buildListWithCategory(
          data[keysData[i]].data,
          data[keysData[i]].title
        );

        if (buildResult) {
          result.push(buildResult);
        }
      }
    }

    return result;
  }

  createDefaultResult(data, type, nameCategory) {
    const { maxOptions, onOptionClick } = this.defaultConfig;

    let count = 1,
      list = [];

    for (let key in data) {
      if (maxOptions && count > maxOptions) {
        break;
      }

      let findWord = this.config.globalSearch
        ? this.globalSearch(data[key].name)
        : this.defaultSearch(data[key].name);

      let link = document.createElement("a");
      link.setAttribute("class", this.setUnicClass("element-" + type));
      link.style.display = "block";
      if (data[key].url) {
        link.setAttribute("href", data[key].url);
      }

      link.innerHTML = findWord;

      if (onOptionClick) {
        link.onclick = e => {
          let name = data[key].name;
          let url = data[key].url;

          return onOptionClick(e, name, url, nameCategory);
        };
      }

      if (maxOptions && findWord && count <= maxOptions) {
        list.push(link);
        count++;
      } else if (!maxOptions && findWord) {
        list.push(link);
      }
    }

    return list;
  }

  buildListWithCategory(data, nameCategory) {
    let list = this.createDefaultResult(data, "with-category", nameCategory);

    let h3 = document.createElement("h3");
    h3.setAttribute("class", this.setUnicClass("title-category"));
    h3.innerHTML = nameCategory;

    list.unshift(h3);

    let div = document.createElement("div");
    div.setAttribute("class", this.setUnicClass("block-category"));

    let length = this.config.maxOptions ? this.config.maxOptions : list.length;

    if (length < 3) {
      length = 3;
    } else {
      length++;
    }

    if (list.length > 1) {
      for (let i = 0; i < length; i++) {
        list[i] && div.appendChild(list[i]);
      }
    } else {
      let p = document.createElement("p");
      p.setAttribute("class", this.setUnicClass("no-result"));
      p.innerHTML = "No result";

      if (this.config.horizontal) {
        list.push(p);
        for (let i = 0; i < list.length; i++) {
          div.appendChild(list[i]);
        }
      }
    }

    if (div.childElementCount > 0) {
      return div;
    }
  }

  setUnicClass(className) {
    return this.config.resultClass
      ? `${this.config.resultClass}-${className}`
      : `hv-${className}`;
  }

  defaultSearch(str) {
    let valInput = this.input.value;
    let regex = new RegExp("^" + valInput, "ig");
    let replace = str.replace(regex, "<b>$&</b>");

    if (replace !== str) {
      return replace;
    }
  }

  globalSearch(str) {
    let valInputArr = this.input.value.split(" "),
      strArr = str.split(" "),
      res = [],
      isChanged = false;

    for (let j = 0; j < strArr.length; j++) {
      let isHaveWord = true;

      for (let i = 0; i < valInputArr.length; i++) {
        if (valInputArr[i] !== "") {
          let regex = new RegExp("\\b" + valInputArr[i], "i");

          if (strArr[j].search(regex) !== -1) {
            let replace = strArr[j].replace(regex, "<b>$&</b>");
            res.push(replace);
            isHaveWord = false;
            isChanged = true;
            break;
          }
        }
      }

      if (isHaveWord) {
        res.push(strArr[j]);
      }
    }

    if (isChanged) {
      return res.join(" ");
    }
  }
}
