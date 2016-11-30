var galleryContainer = document.getElementById("galleryContainer");

$(document).ready(function(){
  var $Image = $(".imageContainerFunction");
  $Image.click(function() {
    $("#ExpandedPhoto").remove();
    var ExpandedPhotoLink = document.createElement("a");
    var ExpandedPhoto = document.createElement("img");
    ExpandedPhoto.className = "imageContainer activeImage darkGrey";
    ExpandedPhotoLink.id = "ExpandedPhoto";
    ExpandedPhotoLink.href = $(this).children().attr("src");
    ExpandedPhoto.src = $(this).children().attr("src");
    galleryContainer.appendChild(ExpandedPhotoLink);
    ExpandedPhotoLink.appendChild(ExpandedPhoto);
    var greyBox = document.createElement("div");
    greyBox.className="greyBox";
    galleryContainer.appendChild(greyBox);
  });
});
setInterval(function() {
  $(document).ready(function() {
    $(".greyBox").click(function() {
      $("#ExpandedPhoto").remove();
      $(this).remove();
    });
  });
},0);
