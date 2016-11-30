var $NewsBlock = $(".newsBlock");
var $NewsTitle = $(".newsTitle");
var $SearchResults = $("#searchResults");
var $InputField = $("input");
var $Search = $("#search");

$SearchResults.hide();
$NewsBlock.toggleClass("newsBlockHeight");

$(document).ready(function () {
  $NewsBlock.click(function () {
    $(this).toggleClass("newsBlockHeight");
  });
});

$(document).ready(function () {
  $Search.click(function () {
    searchFunction();
  });
});

$(document).ready(function () {
  $InputField.keypress(function (e) {
    if ($InputField[0].value !== "") {
      if (e.key === "Enter") {
        searchFunction();
      }
    }
  });
});

function searchFunction () {
  if ($InputField[0].value !== "") {
    $NewsBlock.removeClass("hide");
    $NewsTitle.text("Search Results");
    for (var i = 0; i < $NewsBlock.length; i++) {
      var searchQuery = $NewsBlock[i].getElementsByClassName("newsText")[0].textContent;
      var searchResult = searchQuery.search ($InputField[0].value);
      if (searchResult !== -1) {
        $NewsBlock.removeClass("newsBlockHeight");
      } else {
        $NewsBlock[i].classList.add("hide");
      }
    }
    var $ResultBlocks = $(".hide");
    if ($ResultBlocks.length === $NewsBlock.length) {
      $("q").text($InputField[0].value);
      $SearchResults.children().html("We're sorry, there are no search results for <q>" + $InputField[0].value + "</q>. Try using a different keyword.</p>");
      $SearchResults.show();
    } else {
      $SearchResults.children().html("Search Results for <q>" + $InputField[0].value + "</q>:");
      $SearchResults.show();
    }
    $InputField[0].value = "";
  }
}

$(document).ready(function () {
  $("button").click(function () {
    $SearchResults.hide();
    var elementText = $(this).children("h4").text();
    var classText = elementText.toLowerCase().replace(/ /g, "");
    $NewsTitle.text(elementText);
    $NewsBlock.addClass("newsBlockHeight");
    $NewsBlock.removeClass("hide");
    if (classText === "allnews") {
      for (var i = 0; i < $NewsBlock.length; i++) {
        $NewsBlock[i].classList.remove("hide");
      }
    } else {
      for (var i = 0; i < $NewsBlock.length; i++) {
        if ($NewsBlock[i].className.indexOf(classText) === -1) {
          $NewsBlock[i].classList.add("hide");
        } else {
          $NewsBlock[i].classList.remove("hide");
        }
      }
    }
  });
});
