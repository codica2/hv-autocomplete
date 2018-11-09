(function($) {
  $.fn.HVAutocomplete = function(config) {
    var $mainDiv = this,
      data = config.data,
      isMatch = config.maxLength ? false : true,
      $input,
      $result,
      blockResult = [];

    var defaultConfig = {
      inputClassName: "hv-input",
      resultClassName: "hv-result",
      placeholder: ""
    };

    function initialize() {
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("id", "hv-input-" + $mainDiv.attr("id"));
      input.setAttribute(
        "class",
        config.inputClassName || defaultConfig.inputClassName
      );
      input.setAttribute(
        "placeholder",
        config.placeholder || defaultConfig.placeholder
      );

      var result = document.createElement("div");
      result.setAttribute("id", "hv-result-" + $mainDiv.attr("id"));
      result.setAttribute(
        "class",
        config.resultClassName || defaultConfig.resultClassName
      );

      $mainDiv.css({
        position: "relative"
      });
      $mainDiv.append(input);
      $mainDiv.append(result);

      ($input = $(input)), ($result = $(result));

      setStylesConfigs();
    }

    function setStylesConfigs() {
      var defaultStyles = {
          position: "absolute",
          top: $input.height,
          left: "0px",
          display: "none",
          width: "100%",
          backgroundColor: "#fff"
        },
        styles = {},
        inputStyles = {};

      if (config.inputClassName && config.resultClassName) {
        $result.css({
          position: "absolute",
          top: $input.height,
          left: "0px",
          display: "none"
        });
      } else {
        $result.css(defaultStyles);
      }

      if (config.styles) {
        Object.keys(config.styles).forEach(function(elem) {
          styles[elem] = config.styles[elem];
        });
      }

      if (config.displayHorizontal) {
        styles.display = "flex";
      }

      if (!config.categories) {
        styles.padding = 0;
      }

      if (config.resultStyles) {
        for (var key in config.resultStyles) {
          styles[key] = config.resultStyles[key];
        }
      }

      if (config.inputStyles) {
        for (var key in config.inputStyles) {
          inputStyles[key] = config.inputStyles[key];
        }
        $input.css(inputStyles);
      }

      $result.css(styles);
      $result.hide();
    }

    function buildResultBlock(data) {
      var isInputEmpty = $input.val();
      blockResult = [];

      if (isInputEmpty) {
        if (config.categories) {
          blockResult = createBlockResultWithCategory(data);

          $result.html(blockResult);
          if (blockResult.length !== 0) {
            $result.show();
          }
        } else {
          $result.html(buildDefaultResult(data));
          $result.show();
        }
      } else {
        $result.hide();
      }
    }

    function createBlockResultWithCategory(data) {
      var result = [],
        keysData = Object.keys(data);

      for (var i = 0; i < keysData.length; i++) {
        var isHaveCategory = data[keysData[i]].length !== 0;
        if (isHaveCategory) {
          var buildResult = buildListWithCategory(
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

    function buildDefaultResult(data) {
      var maxLength = 1,
        list = [];

      for (var key in data) {
        if (config.maxLength && maxLength > config.maxLength) {
          break;
        }

        var isFindWord = config.globalSearch
          ? globalSearch(data[key].name)
          : defaultSearch(data[key].name);

        var link = document.createElement("a");
        link.setAttribute("href", data[key].url);
        link.innerHTML = isFindWord;

        var p = document.createElement("p");
        p.setAttribute("class", "hv-element-no-category");
        p.append(link);

        if (config.maxLength && isFindWord && maxLength <= config.maxLength) {
          list.push(p);
          maxLength++;
        } else if (!config.maxLength && isFindWord) {
          list.push(p);
        }
      }
      return list;
    }

    function buildListWithCategory(data, nameCategory) {
      var list = buildDefaultResult(data);

      if (list.length !== 0) {
        var h3 = document.createElement("h3");
        h3.setAttribute("class", "hv-title-category");
        h3.innerHTML = nameCategory;

        list.unshift(h3);

        var div = document.createElement("div");
        div.setAttribute("class", "hv-block-category");

        for (var i = 0; i < list.length; i++) {
          div.appendChild(list[i]);
        }

        return div;
      }

      return null;
    }

    function defaultSearch(str) {
      var valInput = $input.val();
      var regex = new RegExp("^" + valInput, "ig");
      var replace = str.replace(regex, "<b>$&</b>");
      if (replace !== str) {
        return replace;
      }
    }

    function globalSearch(str) {
      var valInputArr = $input.val().split(" "),
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

      if (isMatch) {
        return res.join(" ");
      }
    }

    initialize();

    $input.on("click", function() {
      if (blockResult.length !== 0) {
        $result.show();
      }
    });

    $input.keyup(function() {
      buildResultBlock(data);
    });

    $(document).mouseup(function(e) {
      if (!$result.is(e.target) && $result.has(e.target).length === 0) {
        $result.hide();
      }
    });
  };
})(jQuery);

/* ==================== ASINC REQUESTS, NOW DONT USE ==================== */

$(document).ready(function() {
  var $input = $("#search-place"),
    $result = $(".result-search-field"),
    $closeField = $("#closeSearch");

  $closeField.on("click", function() {
    $result.css({ display: "none" });
    showCloseButton(false);
  });

  $input.on("click", function() {
    showCloseButton(true);
    if ($(this).val() !== "") {
      $result.css({ display: "block" });
    }
  });

  $input.keyup(function() {
    $.ajax({
      url: "/admin/search.json?query=" + $input.val(),
      success: function(result) {
        buildResult(result);
      }
    });
  });

  $(document).mouseup(function(e) {
    if (!$result.is(e.target) && $result.has(e.target).length === 0) {
      showCloseButton(false);
      $result.css({ display: "none" });
    }
  });

  function buildResult(result) {
    var isEmpty = Object.keys(result).length !== 0;

    if (isEmpty) {
      var finalDOMResult = "";

      Object.keys(result).forEach(function(nameCategory) {
        var isHaveCategory = result[nameCategory].length !== 0;

        if (isHaveCategory) {
          finalDOMResult += buildCategory(result[nameCategory], nameCategory);
        }
      });

      $result.html(finalDOMResult);
      $result.css({ display: "block" });
    } else {
      $result.css({ display: "none" });
    }
  }

  function buildCategory(objCategory, nameCategory) {
    var htmlStructureResult = "";

    objCategory.map(function(elem, index) {
      htmlStructureResult +=
        "<p><a href='" + elem.url + "'>" + styleLetters(elem.name) + "</a></p>";

      if (index === 4) {
        htmlStructureResult +=
          "<p class='see-more-results'><a href='/admin/search?utf8=✓&button=&query=s#" +
          nameCategory +
          "'>See more " +
          nameCategory +
          "</a></p>";
      }
    });

    var finalDOMResult =
      "<div class='col-md-12 col-lg-five block-category'>" +
      "<h3 class='name-category'>" +
      nameCategory +
      "</h3>" +
      htmlStructureResult +
      "</div>";

    return finalDOMResult;
  }

  function styleLetters(str) {
    var valInputArr = $input.val().split(" ");
    var strArr = str.split(" ");
    var res = [];

    for (var j = 0; j < strArr.length; j++) {
      var isHaveWord = true;
      for (var i = 0; i < valInputArr.length; i++) {
        if (valInputArr[i] !== "") {
          var regex = new RegExp("\\b" + valInputArr[i], "i");
          if (strArr[j].search(regex) != -1) {
            var reg = strArr[j].replace(regex, "<b>$&</b>");
            res.push(reg);
            isHaveWord = false;
            break;
          }
        }
      }

      if (isHaveWord) {
        res.push(strArr[j]);
      }
    }

    return res.join(" ");
  }

  function showCloseButton(val) {
    $input.val("");
    var $close = $("#closeSearch");
    if (!val) {
      $close.css({ display: "none" });
    } else {
      $close.css({ display: "block" });
    }
  }
});
