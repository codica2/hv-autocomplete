
function HVAutocomplite(config, data){
  var $mainDiv = config.div,
  placeholder = config.inputPlaceholder,
  $input,
  $result,
  display = config.display

  initialize();

  function initialize(){
    $mainDiv.css({
      position: "relative"
    });
    
    var resultClassName = "",
      inputClassName = "";

    if(config.resultClassName){
      resultClassName = config.resultClassName;
    }

    if(config.inputClassName){
      inputClassName = config.inputClassName
    }

    $mainDiv.append('<input type="text" id="hv-input-' + $mainDiv.attr('class') + '" class="hv-input ' + inputClassName +'" placeholder="' + placeholder +'">');
    $mainDiv.append('<div id="hv-result-' + $mainDiv.attr('class') + '" class="hv-result ' + resultClassName + '"></div>');
  
    $input = $("#hv-input-" + $mainDiv.attr('class')),
    $result = $("#hv-result-" + $mainDiv.attr('class'));

    setConfigs();
  }

  $input.on("click", function(){
    if($input.val() !== ""){
      $result.show();
    }
  });

  $input.keyup(function(){
    buildResult(data);
  });

  $(document).mouseup(function(e) {
    if (!$result.is(e.target) && $result.has(e.target).length === 0)  {
      $result.hide();
    }
  });

  function buildResult(data){
    var isInputEmpty = $input.val(),
    finalDOMResult = "";
    
    if(isInputEmpty){
      if(config.categories){
        Object.keys(data).forEach(function(nameCategory){
          var isHaveCategory = data[nameCategory].length !== 0;
          
          if(isHaveCategory){
            finalDOMResult += buildCategory(data[nameCategory], nameCategory);
          }
        });
  
        $result.html(finalDOMResult);
        $result.show();
      } else {
        finalDOMResult += buildList(data);
        $result.html(finalDOMResult);
        $result.show();
      }
     
    } else {
      $result.hide();
    }
  };

  function buildList(data){
    var htmlStructureResult = "",
      maxLength = 1,
      configLength = config.maxLength;
      if(configLength){
        data.map(function(elem){
          var boldLetters = styleLetters(elem.name);
          if(boldLetters && maxLength <= config.maxLength){
            htmlStructureResult += 
            "<p class='hv-element-no-category'><a href='" + elem.url + "'>"  + 
            boldLetters + 
            "</a></p>";
            maxLength++;
          }
        });
      } else {
        data.map(function(elem){
          var boldLetters = styleLetters(elem.name);
          if(boldLetters){
            htmlStructureResult += 
            "<p class='hv-element-no-category'><a href='" + elem.url + "'>"  + 
            boldLetters + 
            "</a></p>";
            maxLength++;
          }
        });
      }

    return htmlStructureResult;
  }

  function buildCategory(objCategory, nameCategory){
    var htmlStructureResult = "";

    objCategory.map(function(elem){

      htmlStructureResult += 
      "<p class='hv-element'><a>"  + 
      styleLetters(elem.name) + 
      "</a></p>";
    });

    //hef='" + elem.url + "'

    var finalDOMResult = "<div class='hv-block-category'>" + 
    "<h3 class='hv-title-category'>" + nameCategory + "</h3>" +
    htmlStructureResult + 
    "</div>";

    return finalDOMResult;
  };

  function styleLetters(str){
    var valInputArr =  $input.val().split(" "),
      strArr = str.split(" "),
      res = [],
      isChanged = false;
  
    for(var j = 0; j < strArr.length; j++){
      var isHaveWord = true;
      for(var i = 0; i < valInputArr.length; i++){
        if(valInputArr[i] !== ""){
          var regex = new RegExp("\\b" + valInputArr[i], "i");
          if (strArr[j].search(regex) != -1) {  
            var reg = strArr[j].replace(regex, "<b>$&</b>");
            res.push(reg);
            isHaveWord = false;
            isChanged = true;
            break;
          }
        }  
      }

      if(isHaveWord){
        res.push(strArr[j]);
      } 
    }

    if(isChanged){
      return res.join(" "); 
    }
  };

  function setConfigs(){
    var defaultStyles = {
      position: "absolute",
      top: $input.height,
      left: "0px",
      display: "none",
      width: "100%",
      backgroundColor: "#fff"
    },
    styles = {},
    stylesInput = {};

    if(config.inputClassName && config.resultClassName ){
      $result.css({
        position: "absolute",
        top: $input.height,
        left: "0px",
        display: "none"
      });
    } else {
      $result.css(defaultStyles);
    }

    if(config.styles){
      Object.keys(config.styles).forEach(function(elem){
        styles[elem] = config.styles[elem];
      });
    }

    if(display === "horizontal"){
      styles.display = "flex";
    }

    if(display === "vertical"){
      
    }

    if(!config.categories){
      styles.padding = 0;
    }

    if(config.resultStyles){
      for(var key in config.resultStyles){
        styles[key] = config.resultStyles[key];
      }
    }

    if(config.inputStyles){
      for(var key in config.inputStyles){
        stylesInput[key] = config.inputStyles[key];
      }
      $input.css(stylesInput);
    }
   
    $result.css(styles);
    $result.hide();
  }

}




















  /* ==================== ASINC REQUESTS ==================== */

$(document).ready(function(){
  var $input = $("#search-place"),
  $result =  $(".result-search-field"),
  $closeField = $("#closeSearch");

  $closeField.on("click", function(){
    $result.css({display: "none"});
    showCloseButton(false);
  });

  $input.on("click", function(){
    showCloseButton(true);
    if($(this).val() !== ""){
      $result.css({display: "block"});
    }
  });

  $input.keyup(function(){
    $.ajax({
      url: "/admin/search.json?query=" + $input.val(), 
      success: function(result){
        buildResult(result);
      }
    });
  });

  $(document).mouseup(function(e) {
    if (!$result.is(e.target) && $result.has(e.target).length === 0)  {
      showCloseButton(false);
      $result.css({display: "none"});
    }
  });

  function buildResult(result){
    var isEmpty = Object.keys(result).length !== 0;

    if(isEmpty){
      var finalDOMResult = "";

      Object.keys(result).forEach(function(nameCategory){
        var isHaveCategory = result[nameCategory].length !== 0;
        
        if(isHaveCategory){
          finalDOMResult += buildCategory(result[nameCategory], nameCategory);
        }
      });

      $result.html(finalDOMResult);
      $result.css({display: "block"});
    } else {
      $result.css({display: "none"});
    }
  }

  function buildCategory(objCategory, nameCategory){
    var htmlStructureResult = "";

    objCategory.map(function(elem, index){
      htmlStructureResult += 
      "<p><a href='" + elem.url + "'>"  + 
      styleLetters(elem.name) + 
      "</a></p>";

      if(index === 4){
        htmlStructureResult+= "<p class='see-more-results'><a href='/admin/search?utf8=✓&button=&query=s#" + nameCategory + "'>See more " + nameCategory + "</a></p>"
      }
    });

    var finalDOMResult = "<div class='col-md-12 col-lg-five block-category'>" + 
    "<h3 class='name-category'>" + nameCategory + "</h3>" +
    htmlStructureResult + 
    "</div>";

    return finalDOMResult;
  };

  function styleLetters(str){
    var valInputArr =  $input.val().split(" ");
    var strArr = str.split(" ");
    var res = [];
  
    for(var j = 0; j < strArr.length; j++){
      var isHaveWord = true;
      for(var i = 0; i < valInputArr.length; i++){
        if(valInputArr[i] !== ""){
          var regex = new RegExp("\\b" + valInputArr[i], "i");
          if (strArr[j].search(regex) != -1) {  
            var reg = strArr[j].replace(regex, "<b>$&</b>");
            res.push(reg);
            isHaveWord = false;
            break;
          } 
        } 
      }

      if(isHaveWord){
        res.push(strArr[j]);
      }
    }     
  
    return res.join(" "); 
  };

  function showCloseButton(val){
    $input.val('');
    var $close = $("#closeSearch");
    if(!val){
      $close.css({display: "none"});
    } else {
      $close.css({display: "block"});
    }
  };
  
});
