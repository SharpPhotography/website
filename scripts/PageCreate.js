//Header Elements------------------------------------
var header = document.getElementsByTagName("header");
var jumbotron = document.createElement("div");
jumbotron.className = "jumbotron jtTest";
var containerFluid = document.createElement("div");
containerFluid.className = "container-fluid";
var headerDiv = document.createElement("div");
headerDiv.className = "row headerdiv sectiontitle";
var titleDiv = document.createElement("div");
titleDiv.className = "col-md-4 col-xs-10 text-center text-nowrap WTBS2 websitetitle";
var WebsiteTitleLink = document.createElement("a");
WebsiteTitleLink.href = "https://sharpphotography.github.io/website/index.html";
var WebsiteTitle = document.createElement("h1");
var WebsiteTitleText = document.createTextNode("Sharp Photography");
var column = document.createElement("div");
column.className = "col-md-8";
var Row = document.createElement("div");
Row.className = "row";
var headertabs = 4;
//Header Elements------------------------------------

//Page Elements----------------------------------
var body = document.getElementsByTagName("body");
var contentMain = document.createElement("div");
contentMain.className = "container-fluid gradient";
var mainRow = document.getElementById("contentItems");
mainRow.className = "row";
var footerDiv = document.createElement("div");
footerDiv.className = "container-fluid footer";
var footer = document.createElement("footer");
var footerTabSection = document.createElement("div");
footerTabSection.className = "col-xs-10 col-xs-offset-1";
var footerNameSection = document.createElement("div");
footerNameSection.className = "col-xs-9 col-xs-offset-2";
var footerNameP = document.createElement("p");
footerNameP.className = "GTBS footerText";
footerNameP.innerHTML = "This website was created by Derek Sharp for MadWire&#8482 Media."
//var footerNameText = document.createTextNode("This website was created by Derek Sharp for MadWire&#8482 Media.");
var contentItems = document.getElementsByClassName("contentItem");
//Page Elements----------------------------------

function OrganizeElements() {
  header[0].appendChild(jumbotron);
  header[0].appendChild(containerFluid);
  containerFluid.appendChild(headerDiv);
  headerDiv.appendChild(titleDiv);
  titleDiv.appendChild(WebsiteTitleLink);
  WebsiteTitleLink.appendChild(WebsiteTitle);
  WebsiteTitle.appendChild(WebsiteTitleText);
  headerDiv.appendChild(column);
  column.appendChild(Row);

  body[0].appendChild(contentMain);
  body[0].appendChild(footerDiv);
  contentMain.appendChild(mainRow);
  footerDiv.appendChild(footer);
  footer.appendChild(footerTabSection);
  footer.appendChild(footerNameSection);
  footerNameSection.appendChild(footerNameP);
  //footerNameP.appendChild(footerNameText);
}

function CreateHeaderTabs() {
 for (var i = 0; i < headertabs; i++) {
   var thisHeaderLink = document.createElement("a");
   var thisHeaderTab = document.createElement("div");
   thisHeaderTab.className = "col-md-2 col-xs-3 orangeGradient WTBS headertab text-center";
   var thisH4 = document.createElement("h4");
   var thisH4Text = document.createTextNode("");
   if (i === 0) {
     thisHeaderTab.style.position = "relative";
     thisHeaderTab.style.zIndex = "1";
     thisH4Text.nodeValue = "GALLERIES";
     thisHeaderLink.href="https://sharpphotography.github.io/website/italianCars.html";
   } else if (i === 1) {
     thisH4Text.nodeValue = "NEWS";
     thisHeaderLink.href="https://sharpphotography.github.io/website/news.html";
   } else if (i === 2) {
     thisH4Text.nodeValue = "ABOUT";
     thisHeaderLink.href="https://sharpphotography.github.io/website/about.html";
   } else if (i === 3) {
     thisH4Text.nodeValue = "CONTACT";
     thisHeaderLink.href="https://sharpphotography.github.io/website/contact.html";
   }
   thisHeaderLink.appendChild(thisHeaderTab);
   thisHeaderTab.appendChild(thisH4);
   thisH4.appendChild(thisH4Text);
   Row.appendChild(thisHeaderLink);
 }
}

var galleryTabSection = document.getElementById("galleryTabSection");
var gallerytabNumber = 5;
var tabSource = "https://sharpphotography.github.io/website/";
var thumbSource = "https://sharpphotography.github.io/website/images/galleryPhotos/";

function CreateHomePageTabs() {
  for (var i = 0; i < gallerytabNumber; i++) {
    var tabLink = document.createElement("a");
    var boxDiv = document.createElement("div");
    boxDiv.className = "col-md-12 col-xs-12 gallerybox orangeGradient";
    var thumbnailContainer = document.createElement("div");
    var thumbUl = document.createElement("ul");
    thumbUl.className = "gallerythumbnail";
    var thumbLi = document.createElement("li");
    thumbLi.className = "galleryimage";
    var thumbImg = document.createElement("img");
    var tabH4 = document.createElement("h4");
    tabH4.className = "gallerytitle WTBS";
    var tabH4Text = document.createTextNode("");
    if (i === 0) {
      tabLink.href = tabSource + "italianCars.html";
      thumbImg.src = thumbSource + "Italian/ItalianCars_00.JPG";
      tabH4Text.nodeValue = "Italian";
    } else if (i === 1) {
      tabLink.href = tabSource + "germanCars.html";
      thumbImg.src = thumbSource + "German/GermanCars_05.JPG";
      tabH4Text.nodeValue = "German";
    } else if (i === 2) {
      tabLink.href = tabSource + "americanCars.html";
      thumbImg.src = thumbSource + "American/AmericanCars_03.JPG";
      tabH4Text.nodeValue = "American";
    } else if (i === 3) {
      tabLink.href = tabSource + "swedishCars.html";
      thumbImg.src = thumbSource + "Swedish/SwedishCars_03.JPG";
      tabH4Text.nodeValue = "Swedish";
    } else if (i === 4) {
      tabLink.href = tabSource + "britishCars.html";
      thumbImg.src = thumbSource + "British/BritishCars_10.JPG";
      tabH4Text.nodeValue = "British";
    }
    galleryTabSection.appendChild(tabLink);
    tabLink.appendChild(boxDiv);
    boxDiv.appendChild(thumbnailContainer);
    thumbnailContainer.appendChild(thumbUl);
    thumbUl.appendChild(thumbLi);
    thumbLi.appendChild(thumbImg);
    boxDiv.appendChild(tabH4);
    tabH4.appendChild(tabH4Text);
  }
}

function CreateFooterElements () {
  var footerLinkNumber = 5;
  for (var i = 0; i < footerLinkNumber; i++) {
    var footerLink = document.createElement("a");
    footerLink.className = "col-xs-1 GTBS";
    var footerH5 = document.createElement("h5");
    var footerText = document.createTextNode("");
    if (i === 0) {
      footerLink.href = "https://sharpphotography.github.io/website/index.html";
      footerText.nodeValue = "Home";
    } else if (i === 1) {
      footerLink.href = "https://sharpphotography.github.io/website/italianCars.html";
      footerText.nodeValue = "Galleries";
    } else if (i === 2) {
      footerLink.href = "https://sharpphotography.github.io/website/news.html";
      footerText.nodeValue = "News";
    } else if (i === 3) {
      footerLink.href = "https://sharpphotography.github.io/website/about.html";
      footerText.nodeValue = "About";
    } else if (i === 4) {
      footerLink.href = "https://sharpphotography.github.io/website/contact.html";
      footerText.nodeValue = "Contact";
    }
    footerLink.appendChild(footerH5);
    footerH5.appendChild(footerText);
    footerTabSection.appendChild(footerLink);
  }
}

if(galleryTabSection !== null) {
  CreateHomePageTabs();
}
OrganizeElements();
CreateHeaderTabs();
CreateFooterElements();
