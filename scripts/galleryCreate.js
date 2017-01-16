var galleryTabsContainer = document.getElementById("galleryTabs");
var mainContent = document.getElementById("mainContent");
mainContent.className = "col-md-9";
var galleryTitleDiv = document.createElement("div");
galleryTitleDiv.className = "col-md-12";
mainContent.appendChild(galleryTitleDiv);
var galleryTitle = document.getElementById("galleryTitle");
galleryTitle.className = "WTBS2 sectiontitle";
galleryTitleDiv.appendChild(galleryTitle);
var gallerySection = document.createElement("div");
gallerySection.className = "container-fluid galleryContainer";
gallerySection.id = "gallerySection";
mainContent.appendChild(gallerySection);

var galleryContainer = document.getElementById("galleryContainer");
gallerySection.appendChild(galleryContainer);
var source = "https://sharpphotography.github.io/website/images/galleryPhotos/";
var galleryType = document.getElementById("gallery_Type").innerHTML;
var numPhotos = document.getElementById("baseImage").src.toString().slice(-6,-4);
var numTabs = 5;

document.getElementById("gallery_Type").style.display="none";

function SetPageTitle() {
  var PageTitle = document.getElementsByTagName("title");
  PageTitle[0].innerHTML = galleryTitle.innerHTML + " Gallery - Sharp Photography";
}

function CreateSourceLink() {
  return source + galleryType + "_";
}

function CreateGalleryTabs() {
  for (var i = 0; i < numTabs; i++) {
    var thisTabLink = document.createElement("a");
    var thisTabDiv = document.createElement("div");
    thisTabDiv.className = "col-md-10 col-md-offset-2 gallerybox orangeGradient";
    var thisTabH4 = document.createElement("h4");
    thisTabH4.className = "gallerytitle WTBS FloatRight";
    var thisH4Text = document.createTextNode("");
    if (i === 0) {
      thisH4Text.nodeValue = "Italian";
      thisTabLink.href = "https://sharpphotography.github.io/website/italianCars.html";
    } else if (i === 1) {
      thisH4Text.nodeValue = "German";
      thisTabLink.href = "https://sharpphotography.github.io/website/germanCars.html";
    } else if (i === 2) {
      thisH4Text.nodeValue = "American";
      thisTabLink.href = "https://sharpphotography.github.io/website/americanCars.html";
    } else if (i === 3) {
      thisH4Text.nodeValue = "Swedish";
      thisTabLink.href = "https://sharpphotography.github.io/website/swedishCars.html";
    } else if (i === 4) {
      thisH4Text.nodeValue = "British";
      thisTabLink.href = "https://sharpphotography.github.io/website/britishCars.html";
    }
    thisTabLink.appendChild(thisTabDiv);
    thisTabH4.appendChild(thisH4Text);
    thisTabDiv.appendChild(thisTabH4);
    galleryTabsContainer.appendChild(thisTabLink);
  }
}

function CreateImages() {
  if (numPhotos > 14) {
    numPhotos = 14;
  }
  for (var i=numPhotos-1;i>=0;i--) {
    var thisImageLink = document.createElement("a");
    thisImageLink.className = "imageLink";
    var thisImageContainer = document.createElement("div");
    thisImageContainer.className = "col-xs-10 col-xs-offset-1 col-md-offset-0 col-md-2 imageContainer imageContainerFunction darkGrey";
    var thisImage = document.createElement("img");
    thisImage.className = "image";
    if (i>=10) {
      thisImage.src = CreateSourceLink() + i + ".JPG";
      thisImageLink.href = CreateSourceLink() + i + ".JPG";
    } else {
      thisImage.src = CreateSourceLink() + "0" + i + ".JPG";
      thisImageLink.href = CreateSourceLink() + "0" + i + ".JPG";
    }
    galleryContainer.appendChild(thisImageLink);
    thisImageLink.appendChild(thisImageContainer);
    thisImageContainer.appendChild(thisImage);
  }
}

CreateGalleryTabs();
CreateImages();
SetPageTitle();
