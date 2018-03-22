$(document).ready(function() {
  sessionStorage.clear();
  $('.bodyloading').addClass('hide');
  $('#containerDiv').removeClass('hide');
  $(".aboutgreenTicks").click(function() {
    $('#exampleModalLongTitle').html("About GreenTicks Bhopal");
    $('.modal-body').html(y);
  });
  $('.loginPage').click(function() {
    $('#exampleModalLongTitle').html("Login @GreenTicks");
    $('.modal-body').html(" ");
    $('.modal-body').load("./loginPage.html");
  });
  $('.contactUs').click(function() {
    $('#exampleModalLongTitle').html("Contact @GreenTicks");
    $('.modal-body').html(" ");
    $('.modal-body').load("./contactUs.html");
  });
});
$.validator.setDefaults({
  submitHandler: function() {
    myFunction();
  }
});
var y = 'Green Ticks is providing multiple services in Pan India level. We have a good infrastructure and skilled manpower to cater the need of successfully conducting the Examinations whether it is Online or Offline in Pan India.';
