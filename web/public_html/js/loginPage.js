if(screen.width <= 768){
$('.mobileView').html("<span class='fa fa-eye img' ontouchstart='mDown()' ontouchend='mUp()' aria-hidden='true' name='password'></span><input type='password' class='form-control' id='password' name='password' placeholder='Password' />");
}else{
$('.mobileView').html("<span class='fa fa-eye img' onmousedown='mDown()' onmouseup='mUp()' aria-hidden='true' name='password'></span><input type='password' class='form-control' id='password' name='password' placeholder='Password' />");
}
$("#signupForm").validate({
  rules: {
    mobi: {
      required: true,
      // digits: true,
      // minlength: 10,
      // maxlength: 10
    },
    password: {
      required: true,
      minlength: 5,
      maxlength: 12,
    },
  },
  messages: {
    mobi: {
      required: "Please enter Your Mobile Number",
      // digits: "Please enter a valid Mobile Number",
      // minlength: "Please put 10  digit mobile number",
      // maxlength: "Please put 10  digit mobile number"
    },
    password: {
      required: "Please provide a password",
      minlength: "Your password must be at least 5 characters long",
      maxlength: "Your password must be at most 12 characters long",
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
/* Password Image settings*/
$('.img').addClass('hide');
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
function mDown() {
  password.type = 'text';
}
function mUp() {
  password.type = 'password';
}
function myFunction() {
  var em1 = document.getElementById("mobi").value;
  var pas1 = document.getElementById("password").value;
  var encodePass = btoa(pas1).toString();
  var obj = {
    "username": em1,
    "password": encodePass
  };
  console.log(obj);
  // $.when(Posthandler("/login", obj, true)).done(function(res) {
  //   console.log(res);
  //   if (res.resCode == 'OK') {
  //     var role = res.role;
  //     var name = res.name;
  //     login = {
  //       "Role": role,
  //       "Name": name,
  //       "Token": res.token
  //     };
  //     console.log(login);
  //     // storagesetItem("login", login);
  //     sessionsetItem("login", login);
  //     window.location.replace("dashboard.html");
  //   } else if (res.resCode === 'Error') {
  //     console.log(res.msg);
  //     swal("Error!", res.msg, "error");
  //   }
  // }).fail(function() {
  //   swal("Error!", "sorry unable to LogIn. please check your internet connection", "error");
  // });
  $.ajax({
    url: '/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(obj),
      datatype: "json",
      // async: asyncType,
      success: function(res) {
        console.log("res>>>>>",res);
          if (res.resCode == 'OK') {
            var role = res.role;
            var name = res.name;
            login = {
              "Role": role,
              "Name": name,
              "Token": res.token
            };
            console.log(login);
            // storagesetItem("login", login);
            sessionsetItem("login", login);
            window.location.replace("dashboard.html");
          } else if (res.resCode === 'Error') {
            console.log(res.msg);
            swal("Error!", res.msg, "error");
          }
      },
      error: function(err) {
        swal("Error!", "sorry unable to LogIn. please check your internet connection", "error");
      }
  });
};
