var secret = sessiongetItem("secret");
console.log(secret);
var login = sessiongetItem("login");
console.log(login);
if((secret == null)||(secret == "")||(secret == undefined)){
  if ((login == null) || (login == "") || (login == undefined)) {
    $('.adminRedioDiv').addClass('hide');
  }
  setTimeout(function() {
    $('#formCompany').removeClass('hide');
    $('#containerDiv').removeClass('hide');
    $('.bodyloading').addClass('hide');
  }, 500);
}else{
  $.when(Posthandler("/route/aboutMe", secret, true)).done(function(res) {
    if (res.resCode == 'OK') {
      var arr = {};
      arr = res.results;
      console.log(">>>>>>formCompany>>>res",res);
      $('.containerload').css('min-height', '550px');
      $('#comName').val(arr[0]["Name"]);
      $('#comReg').val(arr[0]["Registration"]);
      $('#comLand').val(arr[0]["Landline"]);
      $('#comEmail').val(arr[0]["Email"]);
      $('#comWeb').val(arr[0]["Website"]);
      $('#comYear').val(arr[0]["YOI"]);
      $('#comAddress').val(arr[0]["Address"]);
      $('#comCity').val(arr[0]["City"]);
      $('#comState').val(arr[0]["State"]);
      $('#comPincode').val(arr[0]["Pincode"]);
      $('#comDistrict').val(arr[0]["District"]);
      $('#comHRName').val(arr[0]["HR_Name"]);
      $('#comHREmail').val(arr[0]["HR_Email"]);
      $('#comHRMobile').val(arr[0]["HR_Mobile"]);
      $("#comHRMobile").attr("disabled", "disabled");
      $("#comHREmail").attr("disabled", "disabled");

      $('#formCompany').removeClass('hide');
      $('#containerDiv').removeClass('hide');
      $('.bodyloading').addClass('hide');
    } else {
      swal({
          title: "Error!",
          text: "fail to connect",
          type: "error"
        },
        function() {
          swal.close();
          window.location.href = '../dashboard.html';
        });
    }
  }).fail(function() {
    swal({
        title: "Error!",
        text: "fail to connect",
        type: "error"
      },
      function() {
        swal.close();
        window.location.href = '../dashboard.html';
      });
  });
}

$(document).ready(function() {
$('#comName').focus().select();
$("#companyForm").validate({
  rules: {
    comName: {
      required: true,
      onlyLatters: true,
      maxlength: 50,
    },
    comReg: {
      required: true,
      maxlength: 25,
    },
    comLand: {
      required: true,
      digits: true,
      maxlength: 18,
    },
    comEmail: {
      required: true,
      emailformat: true,
      maxlength: 50,
    },
    comWeb: {
      required: true,
      maxlength: 50,
    },
    comYear: {
      required: true,
      maxlength: 4,
    },
    comAddress: {
      required: true,
      maxlength: 50,
    },
    comCity: {
      required: true,
      onlyLatters: true,
      maxlength: 50,
    },
    comState: {
      required: true,
      onlyLatters: true,
      maxlength: 50,
    },
    comPincode: {
      required: true,
      digits: true,
      minlength: 6,
      maxlength: 6,
    },
    comDistrict: {
      required: true,
      onlyLatters: true,
      maxlength: 50,
    },
    comHRName: {
      required: true,
      onlyLatters: true,
      maxlength: 50,
    },
    comHREmail: {
      required: true,
      emailformat: true,
      maxlength: 50,
    },
    comHRMobile: {
      required: true,
      digits: true,
      minlength: 10,
      maxlength: 10,
    },
    comLogo: {
      required: true,
      maxlength: 18,
      photoformat: true,
      maxfilesize: true,
    },
  },
  messages: {
    comName: {
      required: "Please enter Company Name",
      onlyLatters: "Name should be text only( . and Special characters are not allowed)",
      maxlength: "Field should not more then 50 characters",
    },
    comReg: {
      required: "Please provide Company Registration Number",
      maxlength: "Field should not more then 25 characters",
    },
    comLand: {
      required: "Please provide Company office Number",
      digits: "office Number should be digits only",
      maxlength: "Field should not more then 18 Numbers",
    },
    comEmail: {
      required: "Please provide Company Email Address",
      emailformat: "Please Provide Valid Email Address",
      maxlength: "Field should not more then 50 characters",
    },
    comWeb: {
      required: "Please provide Company Website",
      maxlength: "Field should not more then 50 characters",
    },
    comYear: {
      required: "This field it mandatory",
      maxlength: "Field should not more then 4 Numbers",
    },
    comAddress: {
      required: "Please provide Company Address",
      maxlength: "Field should not more then 50 characters",
    },
    comCity: {
      required: "Please provide Company City Name",
      onlyLatters: "City Name should be text only",
      maxlength: "Field should not more then 50 characters",
    },
    comState: {
      required: "Please provide Company State Name",
      onlyLatters: "State Name should be text only",
      maxlength: "Field should not more then 50 characters",
    },
    comPincode: {
      required: "Please provide Company PinCode",
      digits: "Please enter a valid Pin Code Number",
      minlength: "Please put 6 digit Pin number",
      maxlength: "Please put 6 digit pin number"
    },
    comDistrict: {
      required: "Please provide Company District Name",
      onlyLatters: "District Name Name should be text only",
      maxlength: "Field should not more then 50 characters",
    },
    comHRName: {
      required: "Please enter Company HR Name",
      onlyLatters: "Name should be text only",
      maxlength: "Field should not more then 50 characters",
    },
    comHREmail: {
      required: "Please provide HR Email Address",
      emailformat: "Please Provide Valid Email Address",
      maxlength: "Field should not more then 50 characters",
    },
    comHRMobile: {
      required: "Please provide Company HR Mobile number",
      digits: "Please enter a valid Mobile Number",
      minlength: "Please put 10  digit mobile number",
      maxlength: "Please put 10  digit mobile number",
    },
    comLogo: {
      required: "This field it mandatory",
      maxlength: "Field Name should not more then 18 characters",
      photoformat: "This field only support .png extention",
      maxfilesize:"The file size can not exceed 200KB",
    },
  },
  errorElement: "em",
  errorPlacement: function(error, element) {
    // Add the `help-block` class to the error element
    error.addClass("help-block");

    if (element.prop("type") === "checkbox") {
      error.insertAfter(element.parent("label"));
    } else if (element.is(":radio")) {
      error.insertAfter(element.parent("div"));
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
