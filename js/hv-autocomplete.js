class HVAutocomplete {
  constructor(config) {
    this.config = config;
    this.input = config.input;
    this.data = config.data;
    this.divResult;
    this.divWrap;

    this.defaultConfig = {
      resultClass: config.resultClass ? config.resultClass : "hv-result",
      inputClass: config.inputClass ? config.inputClass : "hv-shell",
      maxLength: config.maxLength === undefined ? 5 : config.maxLength,
      onOptionClick: config.onOptionClick && config.onOptionClick,
      prefix: this.input.getAttribute("id") || this.input.getAttribute("class")
    };

    this.initialize();

    new HVAutocompleteEvents(
      this.input,
      this.divResult,
      this.divWrap,
      this.data,
      this.config,
      this.defaultConfig
    );
  }

  initialize() {
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

    if (inputStyles) {
      this.setStyles(this.input, inputStyles);
    } else {
      this.setStyles(this.input, DEFAULT_STYLES_INPUT);
    }

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
      this.lifeCicle(data);
    });

    this.clickOutBlock(divResult);
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
    const { maxLength, onOptionClick } = this.defaultConfig;

    let count = 1,
      list = [];

    for (let key in data) {
      if (maxLength && count > maxLength) {
        break;
      }

      let findWord = this.config.globalSearch
        ? this.globalSearch(data[key].name)
        : this.defaultSearch(data[key].name);

      let link = document.createElement("a");
      // link.setAttribute("href", data[key].url);
      link.innerHTML = findWord;

      let p = document.createElement("p");
      p.setAttribute("class", this.setUnicClass("element-" + type));
      p.append(link);

      if (onOptionClick) {
        p.onclick = () => {
          let name = data[key].name;
          let url = data[key].url;

          return onOptionClick(name, url, nameCategory);
        };
      }

      if (maxLength && findWord && count <= maxLength) {
        list.push(p);
        count++;
      } else if (!maxLength && findWord) {
        list.push(p);
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

    let length = this.config.maxLength ? this.config.maxLength : list.length;

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
