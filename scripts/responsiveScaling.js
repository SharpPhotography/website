var $H1 = $("h1");
var $H3 = $("h3");
var $H4 = $("h4");
var $H5 = $("h5");
var $P = $("p");
var $HeaderDiv = $(".headerdiv");
var $About = $(".AboutUs");
var $Contact = $(".Contact");
var $News = $(".News");
var $WebsiteTitle = $(".websitetitle");
var $Title = $("#websiteTitle");
var $Jumbo = $(".jtTest");
var $TabItem = $(".tabItem");
var $TabLink = $TabItem.parent();
var $HeaderTabs = $("#headertabs");
var $DropDownContainer = $("#dropdownContainer")
var $DropDownRow = $("#DropDownRow");
var $ShowOnSmall = $(".showOnSmall");
var $HideOnSmall = $(".hideOnSmall");

function doSizing() {
  var $ImageContainer = $(".imageContainer");
  var $ImageLink = $(".imageLink");
  if (screen.width > 991) {
    $H1.css("font-size", 36);
    $H3.css("font-size", 24);
    $H4.css("font-size", 18);
    $H5.css("font-size", 14);
    $P.css("font-size", 14);
    $About.css("height",201);
    $Contact.css("height",420);
    $News.css("height",420);
    $HeaderDiv.css("margin-top", "-99px");
    $ImageContainer.addClass("imageContainerFunction");
    $ImageContainer.addClass("imageContainerLeftMargin");
    $WebsiteTitle.removeClass("orangeGradient");
    $WebsiteTitle.addClass("text-center");
    $WebsiteTitle.css("margin-top", "0px");
    $Title.css("padding-bottom", "0px");
    $Jumbo.css("min-height", "250px");
    $ShowOnSmall.hide();
    $HideOnSmall.show();
    if ($TabLink.parent().attr("id") !== "headerTabs") {
      $TabItem.removeClass("col-xs-12 dropdownItem");
      $TabItem.addClass("col-md-2 col-xs-3 orangeGradient headertab text-center");
      $TabItem.children().removeClass("FloatRight");
      $HeaderTabs.append($TabLink);
    }
    $ImageLink.click(function(e) {
      e.preventDefault();
    });
  } else if (screen.width <= 991) {
    $H1.css("font-size", Math.floor((1/screen.width)*26000));
    $H3.css("font-size", Math.floor((1/screen.width)*20000));
    $H4.css("font-size", Math.floor((1/screen.width)*14000));
    $H5.css("font-size", Math.floor((1/screen.width)*12000));
    $P.css("font-size", Math.floor((1/screen.width)*12000));
    var HeaderMargin = -1 * $HeaderDiv.height()-30;
    $HeaderDiv.css("margin-top", HeaderMargin);
    $ImageContainer.removeClass("imageContainerFunction");
    $ImageContainer.removeClass("imageContainerLeftMargin");
    $WebsiteTitle.addClass("orangeGradient");
    $WebsiteTitle.removeClass("text-center");
    $WebsiteTitle.css("margin-top", -1 * $WebsiteTitle.height()+1);
    $Title.css("padding-bottom", "4px");
    if ($TabLink.parent().attr("id") !== "DropDownRow") {
      $TabItem.removeClass("col-md-2 col-xs-3 orangeGradient headertab text-center");
      $TabItem.addClass("col-xs-12 dropdownItem");
      $TabItem.children().addClass("FloatRight");
      $DropDownRow.append($TabLink);
    }
    $ShowOnSmall.show();
    $HideOnSmall.hide();
    $Jumbo.css("min-height", "400px");
  }
  $(".image").css("height", $(".imageContainer").width()+40);
}

setInterval(function(){doSizing()},0);
$(document).ready(doSizing);
