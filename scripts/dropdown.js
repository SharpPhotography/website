var $DropDown = $("#dropdownContainer");
var $DropDownRow = $("#DropDownRow");
var $HamSpan = $("#HamSpan");

$DropDownRow.hide();
$(document).ready(function () {
    $HamSpan.click(function () {
      $DropDownRow.animate({height: 'toggle'});
    });
});
