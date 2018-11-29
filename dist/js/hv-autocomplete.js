"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HVAutocomplete = function () {
  function HVAutocomplete(config) {
    _classCallCheck(this, HVAutocomplete);

    this.config = config;
    this.input = config.input;
    this.data = config.data;
    this.divResult;
    this.divWrap;

    this.checkOnType(this.config);
  }

  _createClass(HVAutocomplete, [{
    key: "checkOnType",
    value: function checkOnType(config) {
      var headerError = "HV-Autcomplete crash :(\n\n";

      for (var key in config) {
        switch (key) {
          case "data":
            var isChecked = void 0;
            if (Array.isArray(config[key])) isChecked = true;

            if (_typeof(config[key]) === "object") isChecked = true;

            if (typeof config[key] === "function") isChecked = true;

            if (!isChecked) {
              throw new Error(headerError + ' Option "data" must be an Object or Array!\n Please, check on correctly data types.');
            }
            break;
          case "input":
            if (config.input.tagName !== "INPUT") {
              throw new Error(headerError + ' Option "input" must be DOM Element <input />!\n Please, check on correctly data types.');
            }
            break;
          case "maxOptions":
            if (typeof config.maxOptions !== "number") {
              throw new Error(headerError + ' Option "maxOptions" must be a Number!\n Please, check on correctly data types.');
            }
            break;
          case "horizontal":
            if (typeof config.horizontal !== "boolean") {
              throw new Error(headerError + ' Option "horizontal" must be a Boolean!\n Please, check on correctly data types.');
            }
            break;
          case "globalSearch":
            if (typeof config.globalSearch !== "boolean") {
              throw new Error(headerError + ' Option "globalSearch" must be a Boolean!\n Please, check on correctly data types.');
            }
            break;
          case "resultClass":
            if (typeof config.resultClass !== "string") {
              throw new Error(headerError + ' Option "resultClass" must be a String!\n Please, check on correctly data types.');
            }
            break;
          case "resultStyles":
            if (_typeof(config.resultStyles) !== "object") {
              throw new Error(headerError + ' Option "resultStyles" must be a Object!\n Please, check on correctly data types.');
            }
            break;
          case "onOptionClick":
            if (typeof config.onOptionClick !== "function") {
              throw new Error(headerError + ' Option "onOptionClick" must be a Function!\n Please, check on correctly data types.');
            }
            break;
        }
      }

      return this.initialize(config);
    }
  }, {
    key: "initialize",
    value: function initialize(config) {
      if (status !== "error") {
        this.defaultConfig = {
          resultClass: config.resultClass ? config.resultClass : "hv-result",
          inputClass: config.inputClass ? config.inputClass : "hv-shell",
          maxOptions: config.maxOptions === undefined ? 5 : config.maxOptions,
          onOptionClick: config.onOptionClick && config.onOptionClick,
          prefix: this.input.getAttribute("id") || this.input.getAttribute("class")
        };

        this.build();

        new HVAutocompleteEvents(this.input, this.divResult, this.divWrap, this.data, this.config, this.defaultConfig);
      }
    }
  }, {
    key: "build",
    value: function build() {
      this.divResult = document.createElement("div");
      this.divResult.setAttribute("id", "hv-result-" + this.defaultConfig.prefix);
      this.divResult.setAttribute("class", this.defaultConfig.resultClass);

      this.createWrap();
      this.configureStyles();
    }
  }, {
    key: "createWrap",
    value: function createWrap() {
      var divWrap = document.createElement("div"),
          parent = this.input.parentNode;
      divWrap.style.position = "relative";

      parent.replaceChild(divWrap, this.input);

      divWrap.appendChild(this.input);
      divWrap.appendChild(this.divResult);

      this.divWrap = divWrap;
    }
  }, {
    key: "configureStyles",
    value: function configureStyles() {
      var _config = this.config,
          resultClass = _config.resultClass,
          resultStyles = _config.resultStyles,
          inputStyles = _config.inputStyles,
          horizontal = _config.horizontal,
          data = _config.data;


      var DEFAULT_STYLES_RESULT = {
        position: "absolute",
        top: this.input.clientHeight,
        width: this.input.clientWidth + "px",
        left: "0px",
        display: "none",
        backgroundColor: "#fff",
        boxSizing: "border-box"
      };

      var DEFAULT_STYLES_INPUT = {
        boxSizing: "border-box"
      };

      var newResultStyles = {};

      if (resultClass) {
        var STYLES_IF_HAVE_CLASS = {
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
  }, {
    key: "setStyles",
    value: function setStyles(elem, styles) {
      for (var key in styles) {
        elem.style[key] = styles[key];
      }
    }
  }]);

  return HVAutocomplete;
}();

var HVAutocompleteEvents = function () {
  function HVAutocompleteEvents(input, divResult, divWrap, data, config, defaultConfig) {
    var _this = this;

    _classCallCheck(this, HVAutocompleteEvents);

    this.blockResult = [];
    this.input = input;
    this.divResult = divResult;
    this.divWrap = divWrap;
    this.config = config;
    this.defaultConfig = defaultConfig;
    this.result;

    input.addEventListener("mousedown", function () {
      _this.lifeCicle(data);
    });

    input.addEventListener("keyup", function () {
      if (typeof data === "function") {
        _this.asyncRequest(data(_this.input));
      } else {
        _this.lifeCicle(data);
      }
    });

    this.clickOutBlock(divResult);
  }

  _createClass(HVAutocompleteEvents, [{
    key: "asyncRequest",
    value: function asyncRequest(data) {
      var url = data.url;
      var method = data.method;

      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var response = xhttp.responseText;
          data.success && data.success(response);

          var isChecked = void 0;
          if (Array.isArray(response)) isChecked = true;

          if ((typeof response === "undefined" ? "undefined" : _typeof(response)) === "object") isChecked = true;

          if (!isChecked) {
            console.error('HV-Autcomplete crash :(\n\n Option "data" must be a Object or Array!\n Please, check your type data.');
          } else if (this.status !== 200) {
            this.lifeCicle(response);
          }
        }
      };

      xhttp.open(method, url, true);
      xhttp.send();
    }
  }, {
    key: "clickOutBlock",
    value: function clickOutBlock(divResult) {
      var _this2 = this;

      this.input.addEventListener("click", function (e) {
        _this2.clickOnWrap(e);
      });

      divResult.addEventListener("click", function (e) {
        _this2.clickOnWrap(e);
      });

      document.addEventListener("click", function () {
        if (divResult) {
          divResult.style.display = "none";
        }
      });
    }
  }, {
    key: "clickOnWrap",
    value: function clickOnWrap(e) {
      if (e) {
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }

      this.divResult.style.display = this.result && this.result.length > 0 ? this.checkHorizontalConfig() : "none";
    }
  }, {
    key: "lifeCicle",
    value: function lifeCicle(data) {
      this.resetChildNodes();

      var isCategories = Array.isArray(data);
      var isInputEmpty = this.input.value;

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
  }, {
    key: "renderResult",
    value: function renderResult(result) {
      if (result.length !== 0) {
        for (var i = 0; i < result.length; i++) {
          this.divResult.appendChild(result[i]);
        }
        this.divResult.style.display = this.checkHorizontalConfig();
      } else {
        this.divResult.style.display = "none";
      }
    }
  }, {
    key: "checkHorizontalConfig",
    value: function checkHorizontalConfig() {
      return this.config.horizontal ? "flex" : "block";
    }
  }, {
    key: "resetChildNodes",
    value: function resetChildNodes() {
      this.result = null;
      while (this.divResult.firstChild) {
        this.divResult.removeChild(this.divResult.firstChild);
      }
    }
  }, {
    key: "createWithCategoryResult",
    value: function createWithCategoryResult(data) {
      var result = [],
          keysData = Object.keys(data);

      for (var i = 0; i < keysData.length; i++) {
        var isHaveCategory = data[keysData[i]].length !== 0;

        if (isHaveCategory) {
          var buildResult = this.buildListWithCategory(data[keysData[i]].data, data[keysData[i]].title);

          if (buildResult) {
            result.push(buildResult);
          }
        }
      }

      return result;
    }
  }, {
    key: "createDefaultResult",
    value: function createDefaultResult(data, type, nameCategory) {
      var _this3 = this;

      var _defaultConfig = this.defaultConfig,
          maxOptions = _defaultConfig.maxOptions,
          onOptionClick = _defaultConfig.onOptionClick;


      var count = 1,
          list = [];

      var _loop = function _loop(key) {
        if (maxOptions && count > maxOptions) {
          return "break";
        }

        var findWord = _this3.config.globalSearch ? _this3.globalSearch(data[key].name) : _this3.defaultSearch(data[key].name);

        var link = document.createElement("a");
        link.setAttribute("class", _this3.setUnicClass("element-" + type));
        link.style.display = "block";
        if (data[key].url) {
          link.setAttribute("href", data[key].url);
        }

        link.innerHTML = findWord;

        if (onOptionClick) {
          link.onclick = function (e) {
            var name = data[key].name;
            var url = data[key].url;

            return onOptionClick(e, name, url, nameCategory);
          };
        }

        if (maxOptions && findWord && count <= maxOptions) {
          list.push(link);
          count++;
        } else if (!maxOptions && findWord) {
          list.push(link);
        }
      };

      for (var key in data) {
        var _ret = _loop(key);

        if (_ret === "break") break;
      }

      return list;
    }
  }, {
    key: "buildListWithCategory",
    value: function buildListWithCategory(data, nameCategory) {
      var list = this.createDefaultResult(data, "with-category", nameCategory);

      var h3 = document.createElement("h3");
      h3.setAttribute("class", this.setUnicClass("title-category"));
      h3.innerHTML = nameCategory;

      list.unshift(h3);

      var div = document.createElement("div");
      div.setAttribute("class", this.setUnicClass("block-category"));

      var length = this.config.maxOptions ? this.config.maxOptions : list.length;

      if (length < 3) {
        length = 3;
      } else {
        length++;
      }

      if (list.length > 1) {
        for (var i = 0; i < length; i++) {
          list[i] && div.appendChild(list[i]);
        }
      } else {
        var p = document.createElement("p");
        p.setAttribute("class", this.setUnicClass("no-result"));
        p.innerHTML = "No result";

        if (this.config.horizontal) {
          list.push(p);
          for (var _i = 0; _i < list.length; _i++) {
            div.appendChild(list[_i]);
          }
        }
      }

      if (div.childElementCount > 0) {
        return div;
      }
    }
  }, {
    key: "setUnicClass",
    value: function setUnicClass(className) {
      return this.config.resultClass ? this.config.resultClass + "-" + className : "hv-" + className;
    }
  }, {
    key: "defaultSearch",
    value: function defaultSearch(str) {
      var valInput = this.input.value;
      var regex = new RegExp("^" + valInput, "ig");
      var replace = str.replace(regex, "<b>$&</b>");

      if (replace !== str) {
        return replace;
      }
    }
  }, {
    key: "globalSearch",
    value: function globalSearch(str) {
      var valInputArr = this.input.value.split(" "),
          strArr = str.split(" "),
          res = [],
          isChanged = false;

      for (var j = 0; j < strArr.length; j++) {
        var isHaveWord = true;

        for (var i = 0; i < valInputArr.length; i++) {
          if (valInputArr[i] !== "") {
            var regex = new RegExp("\\b" + valInputArr[i], "i");

            if (strArr[j].search(regex) !== -1) {
              var replace = strArr[j].replace(regex, "<b>$&</b>");
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
  }]);

  return HVAutocompleteEvents;
}();