class HVAutocomplete {
  constructor(config) {
    this.config = config;
    this.input = config.input;
    this.data = config.data;
    this.divResult;
    this.divWrap;

    this.defaultConfig = {
      resultClass: "hv-result" || config.resultClass,
      inputClass: "hv-shell",
      prefix: this.input.getAttribute("id") || this.input.getAttribute("class")
    };

    this.initialize();

    new HVAutocompleteEvents(
      this.input,
      this.divResult,
      this.divWrap,
      this.data,
      this.config
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
      displayHorizontal,
      categories
    } = this.config;

    const DEFAULT_WIDTH = "200px";

    const DEFAULT_STYLES_RESULT = {
      position: "absolute",
      top: this.input.clientHeight,
      width: DEFAULT_WIDTH,
      left: "0px",
      display: "none",
      backgroundColor: "#fff",
      boxSizing: "border-box"
    };
    const DEFAULT_STYLES_INPUT = {
      width: DEFAULT_WIDTH,
      boxSizing: "border-box"
    };

    let newResultStyles = {};

    if (resultClass) {
      const STYLES_IF_HAS_CLASS = {
        position: "absolute",
        top: this.input.clientHeight,
        left: "0px",
        display: "none"
      };
      this.setStyles(this.divResult, STYLES_IF_HAS_CLASS);
    } else {
      this.setStyles(this.divResult, DEFAULT_STYLES_RESULT);
    }

    if (displayHorizontal) {
      newResultStyles.display = "flex";
    }

    if (categories) {
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
  constructor(input, divResult, divWrap, data, config) {
    this.blockResult = [];
    this.input = input;
    this.divResult = divResult;
    this.divWrap = divWrap;
    this.config = config;

    input.addEventListener("click", () => {
      this.buildResultBlock(data);
    });

    input.addEventListener("keyup", () => {
      this.buildResultBlock(data);
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

    this.divResult.style.display = "block";
  }

  buildResultBlock(data) {
    this.resetChildNodes();
    let isInputEmpty = this.input.value,
      result;

    if (isInputEmpty) {
      if (this.config.categories) {
        result = this.createBlockResultWithCategory(data);
      } else {
        result = this.buildDefaultResult(data);
      }
      this.renderResult(result);
    } else {
      this.divResult.style.display = "none";
    }
  }

  renderResult(result) {
    if (result.length !== 0) {
      for (let i = 0; i < result.length; i++) {
        this.divResult.appendChild(result[i]);
      }
      this.divResult.style.display = "block";
    } else {
      this.divResult.style.display = "none";
    }
  }

  resetChildNodes() {
    while (this.divResult.firstChild) {
      this.divResult.removeChild(this.divResult.firstChild);
    }
  }

  createBlockResultWithCategory(data) {
    let result = [],
      keysData = Object.keys(data);

    for (let i = 0; i < keysData.length; i++) {
      let isHaveCategory = data[keysData[i]].length !== 0;

      if (isHaveCategory) {
        let buildResult = this.buildListWithCategory(
          data[keysData[i]],
          keysData[i]
        );

        if (buildResult) {
          result.push(buildResult);
        }
      }
    }

    return result;
  }

  buildDefaultResult(data) {
    const { maxLength } = this.config;
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
      link.setAttribute("href", data[key].url);
      link.innerHTML = findWord;

      let p = document.createElement("p");
      p.setAttribute("class", "hv-element-no-category");
      p.append(link);

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
    let list = this.buildDefaultResult(data);

    if (list.length !== 0) {
      let h3 = document.createElement("h3");
      h3.setAttribute("class", "hv-title-category");
      h3.innerHTML = nameCategory;

      list.unshift(h3);

      let div = document.createElement("div");
      div.setAttribute("class", "hv-block-category");

      for (let i = 0; i < list.length; i++) {
        div.appendChild(list[i]);
      }

      return div;
    }
    return null;
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
    let valInputArr = $input.val().split(" "),
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

    if (isMatch) {
      return res.join(" ");
    }
  }
}
