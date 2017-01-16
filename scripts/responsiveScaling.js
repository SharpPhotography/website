var $H1 = $("h1");
var $H3 = $("h3");
var $H4 = $("h4");
var $H5 = $("h5");
var $P = $("p");
var $HeaderDiv = $(".headerdiv");
var $About = $(".AboutUs");
var $Contact = $(".Contact");
var $News = $(".News");
var $HeaderTabs = $("#headertabs");
var $WebsiteTitle = $(".websitetitle");
var $Title = $("#websiteTitle");
var $HamSpan = $("#HamSpan");
var $Jumbo = $(".jtTest");
var $GallerySection = $("#galleryTabSection");
var $FooterTabSection = $("#footerTabSection");
var $SearchOptions = $("#searchOptions");
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
    $HeaderTabs.show();
    $HamSpan.hide();
    $WebsiteTitle.removeClass("orangeGradient");
    $WebsiteTitle.addClass("text-center");
    $WebsiteTitle.css("margin-top", "0px");
    $Title.css("padding-bottom", "0px");
    $Jumbo.css("min-height", "250px");
    $GallerySection.show();
    $FooterTabSection.show();
    $SearchOptions.show();
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
    $HeaderTabs.hide();
    $HamSpan.show();
    $GallerySection.hide();
    $FooterTabSection.hide();
    $SearchOptions.hide();
    $Jumbo.css("min-height", "400px");
  }
  $(".image").css("height", $(".imageContainer").width()+40);
}

setInterval(function(){doSizing()},0);
$(document).ready(doSizing);
