
  // Contact Us Form Validation
  $("#contact").validate({
    rules: {
      contactName: {
        required: true,
        onlyLatters: true,
      },
      contactEmail: {
        required: true,
        emailformat: true,
      },
      contactMobile: {
        digits: true,
        minlength: 10,
        maxlength: 10
      },
      contactSubject: {
        required: true,
      },
      contactText: {
        required: true,
      },

    },
    messages: {
      contactName: {
        required: "Please enter Your Name",
        onlyLatters: "Name should be text only",
      },
      contactEmail: {
        required: "Please provide Your Email Address",
        emailformat: "Please Provide Valid Email Address",
      },
      contactMobile: {
        digits: "Please enter a valid Mobile Number",
        minlength: "Please put 10  digit mobile number",
        maxlength: "Please put 10  digit mobile number"
      },
      contactSubject: {
        required: "Please provide Subject",
      },
      contactText: {
        required: "Please provide Your Message",
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
      $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
    }
  });
  function myFunction() {
    var contactName = $('#contactName').val();
    var contactEmail = $('#contactEmail').val();
    var contactMobile = $('#contactMobile').val();
    var contactSubject = $('#contactSubject').val();
    var contactText = $('#contactText').val();
    var obj = {
      "contactName": capitalizeFirstLetterEachWordSplitBySpace(contactName),
      "contactEmail": contactEmail,
      "contactMobile": contactMobile,
      "contactSubject": capitalize(contactSubject),
      "contactText": capitalize(contactText),
    };
    console.log(obj);
    $.when(PosthandlerWOH("/route/contactUs", obj, true)).done(function(res) {
      console.log(res);
      if (res.resCode == 'OK') {
        swal({
            title: res.resCode,
            text: res.msg,
            type: "success"
          },
          function() {
            swal.close();
            window.location.replace("login.html");
          });
      } else if (res.resCode == 'Error') {
        swal("Error!", res.msg, "error");
      }
    }).fail(function() {
      swal("Error!", "sorry unable to Connect with Server. please check your internet connection", "error");
      // window.location.replace("login.html");
    });
  }
