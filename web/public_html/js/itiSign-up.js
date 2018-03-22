var secret = sessiongetItem("secret");
console.log(secret);
var login = sessiongetItem("login");
console.log(login);
if((secret == null)||(secret == "")||(secret == undefined)){
  if ((login == null) || (login == "") || (login == undefined)) {
    $('.adminRedioDiv').addClass('hide');
  }
  setTimeout(function() {
    $('#formITI').removeClass('hide');
    $('#containerDiv').removeClass('hide');
    $('.bodyloading').addClass('hide');
  }, 500);
} else {
  $.when(Posthandler("/route/aboutMe", secret, true)).done(function(res) {
    if (res.resCode == 'OK') {
      var arr = {};
      arr = res.results;
      console.log(">>>>>>formCompany>>>res", res);
      $('.containerload').css('min-height', '550px');
      $('#itiName').val(arr[0]["Name"]);
      $('#itiReg').val(arr[0]["Registration"]);
      $('#itiLand').val(arr[0]["Landline"]);
      $('#itiEmail').val(arr[0]["Email"]);
      $('#itiMobile').val(arr[0]["Mobile"]);
      // $('input[name=itiType]:checked').val(arr[0]["YOI"]);
      $("input[name=itiType][value=" + arr[0]["Type"] + "]").attr('checked', 'checked');
      $('#itiAddress').val(arr[0]["Address"]);
      $('#itiCity').val(arr[0]["City"]);
      $('#itiState').val(arr[0]["State"]);
      $('#itiPincode').val(arr[0]["Pincode"]);
      $('#itiDistrict').val(arr[0]["District"]);
      // $('#datepicker').val(moment(arr["dob"]).format("YYYY-MM-DD"));
      $('#itiTPOName').val(arr[0]["TPO_Name"]);
      $('#itiTPOEmail').val(arr[0]["TPO_Email"]);
      $('#itiTPOMobile').val(arr[0]["TPO_Mobile"]);
      $("#itiTPOMobile").attr("disabled", "disabled");
      $("#itiTPOEmail").attr("disabled", "disabled");

      // $('.bodyloading').addClass('hide');
      $('#formITI').removeClass('hide');
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
        text: "sorry fail to connect. please check your internet connection",
        type: "error"
      },
      function() {
        swal.close();
        window.location.href = '../dashboard.html';
      });
  });
}

$(document).ready(function() {
  $('#itiName').focus().select();
  $("#itiForm").validate({
    rules: {
      itiName: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      itiReg: {
        required: true,
        maxlength: 25,
      },
      itiLand: {
        required: true,
        digits: true,
        maxlength: 18,
      },
      itiEmail: {
        required: true,
        emailformat: true,
        maxlength: 50,
      },
      itiMobile: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      itiType: {
        required: true,
        maxlength: 10,
      },
      itiAddress: {
        required: true,
        maxlength: 50,
      },
      itiCity: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      itiState: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      itiPincode: {
        required: true,
        digits: true,
        minlength: 6,
        maxlength: 6,
      },
      itiDistrict: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      itiTPOName: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      itiTPOEmail: {
        required: true,
        emailformat: true,
        maxlength: 50,
      },
      itiTPOMobile: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      itiLogo: {
        required: true,
        maxlength: 18,
        photoformat: true,
        maxfilesize: true,
      },
      trade: {
        required: true,
      },
    },
    messages: {
      itiName: {
        required: "Please enter College Name",
        onlyLatters: "Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      itiReg: {
        required: "Please provide College Registration Number",
        maxlength: "Field should not more then 25 characters",
      },
      itiLand: {
        required: "Please provide college office Number",
        digits: "office Number should be digits only",
        maxlength: "Field should not more then 18 characters",
      },
      itiEmail: {
        required: "Please provide college Email Address",
        emailformat: "Please Provide Valid Email Address",
        maxlength: "Field should not more then 50 characters",
      },
      itiMobile: {
        required: "Please provide College office Mobile Number",
        digits: "Please enter a valid Mobile Number",
        minlength: "Please put 10  digit mobile number",
        maxlength: "Please put 10  digit mobile number",
      },
      itiType: {
        required: "This field it mandatory",
        maxlength: "Field should not more then 10 characters",
      },
      itiAddress: {
        required: "Please provide College Address",
        maxlength: "Field should not more then 50 characters",
      },
      itiCity: {
        required: "Please provide College City Name",
        onlyLatters: "City Name should be text only",
        maxlength: "Field should not more then 50 characters",
      },
      itiState: {
        required: "Please provide College State Name",
        onlyLatters: "State Name should be text only",
        maxlength: "Field should not more then 50 characters",
      },
      itiPincode: {
        required: "Please provide college PinCode",
        digits: "Please enter a valid Pin Code Number",
        minlength: "Please put 6 digit Pin number",
        maxlength: "Please put 6 digit pin number"
      },
      itiDistrict: {
        required: "Please provide College District Name",
        onlyLatters: "District Name Name should be text only",
        maxlength: "Field should not more then 50 characters",
      },
      itiTPOName: {
        required: "Please enter College TPO Name",
        onlyLatters: "Name should be text only",
        maxlength: "Field should not more then 50 characters",
      },
      itiTPOEmail: {
        required: "Please provide TPO Email Address",
        emailformat: "Please Provide Valid Email Address",
        maxlength: "Field should not more then 50 characters",
      },
      itiTPOMobile: {
        required: "Please provide College TPO Mobile number",
        digits: "Please enter a valid Mobile Number",
        minlength: "Please put 10  digit mobile number",
        maxlength: "Please put 10  digit mobile number",
      },
      itiLogo: {
        required: "This field it mandatory",
        maxlength: "Field Name should not more then 18 characters",
        photoformat: "This field only support .png extention",
        maxfilesize:"The file size can not exceed 200KB",
      },
      trade: {
        required: "Please Select Your Trade",
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
  var obj;
  $.when(Gethandler("/route/getTradeLists", obj, true)).done(function(res) {
    if (res.resCode == 'OK') {
      $("#trade").html(" ");
      for (var i = 0; i < res.results.length; i++) {
        $("#trade").append('<option value="' + res.results[i]['Trade'] + '">' + res.results[i]['Trade'] + '</option>');
      }
      $('#trade').multiselect({
        maxHeight: 155,
        // enableFiltering: true,
        // includeSelectAllOption: true,
        // dropUp: true
      });
      $('.btn-group').addClass('form-control no-padding');
      $('.multiselect').addClass('width100');
      $('.multiselect-container').addClass('width100');
      if ((secret == null) || (secret == "") || (secret == undefined)) {}
      else{
        multiSelectorCheck();
      }
    } else {
      swal({
          title: "Error!",
          text: "Trade List is empty, Please contect us!",
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
        text: "sorry fail to connect. please check your internet connection",
        type: "error"
      },
      function() {
        swal.close();
        window.location.href = '../login.html';
      });
  });
});

function multiSelectorCheck() {
  if (secret.Key == "Edit") {
    $.when(Posthandler("/route/getCollegeWiseTradeLists", {
      "Name": login.Name
    }, true)).done(function(res) {
      if (res.resCode == 'OK') {
        console.log("getCollegeWiseTradeLists>>>>>>>>>>", res);
        $("#trade").append('<option selected disabled>None</option>');
        for (var i = 0; i < res.results.length; i++) {
          console.log(res.results[i]['Trade']);
          // $("#trade").append('<option value="' + res.results[i]['Trade'] + '">' + res.results[i]['Trade'] + '</option>');
          // $("input[name=trade][value=" + res.results[i]['Trade'] + "]").attr('checked', 'checked');
          $("#trade option[value=" + res.results[i]['Trade'] + "]").prop('selected', true);
        }
        $('#trade').multiselect('refresh');
        $('#containerDiv').removeClass('hide');
        $('.bodyloading').addClass('hide');
      } else {
        swal({
            title: "Error!",
            text: "This College Trades List is empty",
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
          text: "fail to connect, Please check your internet connection!",
          type: "error"
        },
        function() {
          swal.close();
          window.location.href = '../login.html';
        });
    });
  }
};
