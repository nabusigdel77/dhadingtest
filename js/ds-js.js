
$(function () {
    // this will get the full URL at the address bar
    var url = window.location.href;
    // passes on every "a" tag
    $(".navbar-nav .nav-link").each(function () {
      // checks if its the same on the address bar
      if (url == (this.href)) {
        $(this).closest("li").addClass("active");
        //for making parent of submenu active
        $(this).closest("li").parent().parent().addClass("active");
      }
    });
  });


 function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function(){
    // Prepare the preview for profile picture
        $("#wizard-picture").change(function(){
            readURL(this);
        });
    });

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});



// nested tab
$("ul.nav-tabs a").click(function (e) {
    e.preventDefault();  
      $(this).tab('show');
  });
  

// image previewer

$(document).on("click", ".browse", function() {
    var file = $(this).parents().find(".file");
    file.trigger("click");
  });
  $('input[type="file"]').change(function(e) {
    var fileName = e.target.files[0].name;
    $("#file").val(fileName);
  
    var reader = new FileReader();
    reader.onload = function(e) {
      // get loaded data and render thumbnail.
      document.getElementById("preview").src = e.target.result;
    };
    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });
