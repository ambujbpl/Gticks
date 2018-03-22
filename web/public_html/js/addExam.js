$(document).ready(function() {
  var validator = $("#examForm").validate({
    rules: {
      examName: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      description: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      orgniser: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      examDate: {
        required: true,
        // validDate: true,
      },
      examShift: {
        required: true,
        digits: true,
      },
      examCount: {
        required: true,
        digits: true,
      },
      examRequirement: {
        required: true,
        maxlength: 50,
      },
    },
    messages: {
      examName: {
        required: "Please enter Exam Name",
        onlyLatters: "Exam Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      description: {
        required: "Please provide exam Father Name",
        onlyLatters: "Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      orgniser: {
        required: "Please provide exam Address",
        onlyLatters: "Orgniser Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      examDate: {
        required: "Please provide Your Date of Birth",
        // validDate:"Please enter a valid date in the format DD-MM-YYYY",
      },
      examShift: {
        required: "Please provide exam Email Address",
        digits: "Please enter a valid Mobile Number",
      },
      examCount: {
        required: "Please enter Invigilator Mobile Number",
        digits: "Please enter a valid Mobile Number",
      },
      examRequirement: {
        required: "Please provide Total Experience Year in Number",
        maxlength: "Field should not more then 50 characters",
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
  // var end = new Date();
  // var date_input = $('input[name="date"]'); //our date input has the name "date"
  // var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  // var options = {
  //   format: 'dd-mm-yyyy',
  //   endDate: '01-01-2010',
  //   container: container,
  //   todayHighlight: true,
  //   autoclose: true,
  // };
  // date_input.datepicker(options);
  $('#examDate').multiDatesPicker({
    	dateFormat: "dd-mm-yy",
  });
});
