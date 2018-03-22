$(document).ready(function() {
  var validator = $("#invigilatorForm").validate({
    rules: {
      invigilatorName: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      fatherName: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      invigilatorAddress: {
        required: true,
        maxlength: 50,
      },
      date: {
        required: true,
        validDate: true,
      },
      invigilatorEmail: {
        required: true,
        emailformat: true,
        maxlength: 50,
      },
      invigilatorMobile: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      invigilatorExperience: {
        required: true,
        digits: true,
      },
    },
    messages: {
      invigilatorName: {
        required: "Please enter Invigilator Name",
        onlyLatters: "Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      fatherName: {
        required: "Please provide Invigilator Father Name",
        onlyLatters: "Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      invigilatorAddress: {
        required: "Please provide Invigilator Address",
        maxlength: "Field should not more then 50 characters",
      },
      date: {
        required: "Please provide Your Date of Birth",
        validDate:"Please enter a valid date in the format DD-MM-YYYY",
      },
      invigilatorEmail: {
        required: "Please provide Invigilator Email Address",
        emailformat: "Please Provide Valid Email Address",
        maxlength: "Field should not more then 50 characters",
      },
      invigilatorMobile: {
        required: "Please enter Invigilator Mobile Number",
        digits: "Please enter a valid Mobile Number",
        minlength: "Please put 10  digit mobile number",
        maxlength: "Please put 10  digit mobile number",
      },
      invigilatorExperience: {
        required: "Please provide Total Experience Year in Number",
        digits: "Please enter a valid Total Year in Number only",
      },
    },
    errorElement: "em",
    errorPlacement: function(error, element) {
      // Add the `help-block` class to the error element
      error.addClass("help-block");

      if (element.prop("type") === "checkbox") {
        error.insertAfter(element.parent("label"));
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-12").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-12").addClass("has-success").removeClass("has-error");
    }
  });
  var end = new Date();
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  var options = {
    format: 'dd-mm-yyyy',
    endDate: '01-01-2010',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
});
