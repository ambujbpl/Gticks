var change = sessiongetItem("change");
var changeObj = sessiongetItem("changeObj");
var login = sessiongetItem("login");
console.log("change>>>>>>",change);
console.log("changeObj>>>>>>",changeObj);
console.log("login>>>>>>",login);
$.validator.setDefaults({
  submitHandler: function() {
    var password = $("#password").val();
    var confirm = $("#Confirm_Password").val();
    var otp = $("#otp").val();
    if((change == null)||(change == "")||(change == undefined)){
      var objpass = {
        "Email": changeObj.Email,
        "Password": password,
        "Confirm": confirm,
        "Otp": otp,
      };
    } else {
      if(change.Key == "Change"){
        var objpass = {
          "Email": change.Email,
          "Password": password,
          "Confirm": confirm,
          "Key": change.Key,
        };
      }
    }
    console.log(objpass);
    $.when(Posthandler("/route/change_password", objpass, true)).done(function(res) {
      if (res.resCode === 'OK') {
        storageremoveItem("adminlogin");
        swal({
            title: "OK!",
            text: res.msg,
            type: "success"
          },
          function() {
            swal.close();
            sessionStorage.clear();
            window.location.replace("../login.html");
          });
      } else {
        swal({
            title: "Error!",
            text: res.msg,
            type: "error"
          },
          function() {
            swal.close();
            // sessionStorage.clear();
            // window.location.href = '../login.html';
          });
      }
    }).fail(function() {
      swal({
          title: "Error!",
          text: "sorry unable to LogIn. please check your internet connection",
          type: "error"
        },
        function() {
          swal.close();
          sessionStorage.clear();
          window.location.href = '../login.html';
        });
    });
  }
});

$(document).ready(function() {
  if(change != null) {
    $('.otpdiv').addClass('hide');
    setTimeout(function() {
      $('#containerDiv').removeClass('hide');
      $('.bodyloading').addClass('hide');
    }, 200);
  }else{
    setTimeout(function() {
      $('#containerDiv').removeClass('hide');
      $('.bodyloading').addClass('hide');
    }, 100);
  }
  $('.img').addClass('hide');
  $('.img1').addClass('hide');
  $('#password').hover(function() {
    $('.img').removeClass('hide');
  }, function() {
    $('.img').addClass('hide');
  });
  $('.img').hover(function() {
    $('.img').removeClass('hide');
  }, function() {
    $('.img').removeClass('hide');
  });
  $('#Confirm_Password').hover(function() {
    $('.img1').removeClass('hide');
  }, function() {
    $('.img1').addClass('hide');
  });
  $('.img1').hover(function() {
    $('.img1').removeClass('hide');
  }, function() {
    $('.img1').removeClass('hide');
  });

  var confirm = document.getElementById("Confirm_Password").value;
  $("#passwordchange").validate({
    rules: {
      password: {
        required: true,
        minlength: 5,
        maxlength: 8,
        pwcheckspechars: true,
        pwchecknumber: true
      },
      Confirm_Password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
    },
    messages: {
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        manlength: "Your password must be at most 8 characters long",
        pwchecknumber: "The password must contain at least one number",
        pwcheckspechars: "at 1 Special Character required"
      },
      Confirm_Password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        equalTo: "Please enter the same password as above"
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

function mDown() {
  password.type = 'text';
}

function mUp() {
  password.type = 'password';
}

function mDown1() {
  Confirm_Password.type = 'text';
}

function mUp1() {
  Confirm_Password.type = 'password';
}
