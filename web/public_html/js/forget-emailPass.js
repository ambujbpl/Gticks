$.validator.setDefaults({
  submitHandler: function() {
    var em1 = $("#email").val();
    changeObj = {
      "Email": em1
    };
    sessionsetItem("changeObj", changeObj);
    $.when(Posthandler("/route/forgot_password", changeObj, true)).done(function(res) {
      console.log(res.resCode);
      if (res.resCode == 'OK') {
        console.log(res.msg);
        swal({
            title: "OK!",
            text: res.msg,
            type: "success"
          },
          function() {
            window.location.replace("forgot-Password.html");
          });
      } else {
        swal({
            title: "Error!",
            text: "fail to connect",
            type: "error"
          },
          function() {
            swal.close();
            window.location.href = '../login.html';
          });
      }
    }).fail(function() {
      swal({
          title: "Error!",
          text: "Sorry fail to connect, Please check your internet connection!",
          type: "error"
        },
        function() {
          swal.close();
          window.location.href = '../login.html';
        });
    });
  }
});

$(document).ready(function() {
 sessionStorage.clear();
 setTimeout(function() {
      $('#containerDiv').removeClass('hide');
      $('.bodyloading').addClass('hide');
    }, 100);
  $("#emailvalid").validate({
    rules: {
      email: {
        required: true,
        emailformat: true,
        maxlength: 50,
      },
    },
    messages: {
      email: {
        required: "Please provide Your Email Address",
        emailformat: "Please Provide Valid Email Address",
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
      $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
    }
  });
});
