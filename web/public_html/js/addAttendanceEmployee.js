  $('.tablecontainerDiv').removeClass('hide');
  var end = new Date();
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  var options = {
    format: 'dd-mm-yyyy',
    endDate: end,
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
