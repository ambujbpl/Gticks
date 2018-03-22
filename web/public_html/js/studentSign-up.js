var secret = sessiongetItem("secret");
console.log(secret);
var login = sessiongetItem("login");
console.log(login);
if((secret == null)||(secret == "")||(secret == undefined)){
  if ((login == null) || (login == "") || (login == undefined)) {
    $('.adminRedioDiv').addClass('hide');
  }
  setTimeout(function() {
    $('#formStudent').removeClass('hide');
    $('#containerDiv').removeClass('hide');
    $('.bodyloading').addClass('hide');
  }, 500);
} else {
  $.when(Posthandler("/route/aboutMe", secret, true)).done(function(res) {
    if (res.resCode == 'OK') {
      var arr = {};
      arr = res.results;
      sessionsetItem("secretData",arr);
      console.log(">>>>>>formStudent>>>res", res);
      $('.containerload').css('min-height', '550px');
      $('#studentName').val(arr[0]["Name"]);
      $('#studentFather').val(arr[0]["Father"]);
      $('#studentMother').val(arr[0]["Mother"]);
      $('#studentEmail').val(arr[0]["Email"]);
      $('#date').val(moment(arr[0]["Dob"]).format("YYYY-MM-DD"));
      $('#studentAddress').val(arr[0]["Address"]);
      $('#studentCity').val(arr[0]["City"]);
      $('#studentState').val(arr[0]["State"]);
      $('#studentPin').val(arr[0]["Pincode"]);
      $('#studentMobile').val(arr[0]["Mobile"]);
      $('#studentCollege').val(arr[0]["College"]);
      $('#trade').val(arr[0]["Trade"]);
      $('#studentPassY').val(arr[0]["POY"]);
      $("#studentPer").val(arr[0]["Per"]);
      $('#studentHSPer').val(arr[0]["HSPer"]);
      $('#studentExpCom').val(arr[0]["LastComp"]);
      $("#studentExpYear").val(arr[0]["TPO_Mobile"]);
      $("input[name=sex][value=" + arr[0]["Sex"] + "]").attr('checked', 'checked');
      $("input[name=jobs][value=" + arr[0]["Job"] + "]").attr('checked', 'checked');
      $("#studentMobile").attr("disabled", "disabled");
      $("#studentEmail").attr("disabled", "disabled");
      // $('.bodyloading').addClass('hide');
      $('#formStudent').removeClass('hide');
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
  $('#studentName').focus().select();
  $("#studentForm").validate({
    rules: {
      studentName: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      studentFather: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      studentMother: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      studentEmail: {
        required: true,
        emailformat: true,
        maxlength: 50,
      },
      date: {
        required: true,
        validDate: true,
      },
      sex: {
        required: true,
        maxlength: 6,
      },
      studentAddress: {
        required: true,
        maxlength: 50,
      },
      studentCity: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      studentState: {
        required: true,
        onlyLatters: true,
        maxlength: 50,
      },
      studentPin: {
        required: true,
        digits: true,
        minlength: 6,
        maxlength: 6,
      },
      studentMobile: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      studentCollege: {
        required: true,
        maxlength: 50,
      },
      trade: {
        required: true,
      },
      studentPassY: {
        required: true,
        digits: true,
        minlength: 4,
        maxlength: 4,
      },
      studentPer: {
        required: true,
        digits: true,
        maxlength: 3,
      },
      studentHSPer: {
        required: true,
        digits: true,
        maxlength: 3,
      },
      jobs: {
        required: true,
      },
    },
    messages: {
      studentName: {
        required: "Please enter Your Name",
        onlyLatters: "Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      studentFather: {
        required: "Please provide Your Father's Name",
        onlyLatters: "Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      studentMother: {
        required: "Please provide Your Mother's Name",
        onlyLatters: "Name should be text only( . and Special characters are not allowed)",
        maxlength: "Field should not more then 50 characters",
      },
      studentEmail: {
        required: "Please provide Your Email Address",
        emailformat: "Please Provide Valid Email Address",
        maxlength: "Field should not more then 50 characters",
      },
      date: {
        required: "Please provide Your Date of Birth",
        validDate:"Please enter a valid date in the format YYYY-MM-DD",
      },
      sex: {
        required: "This field it mandatory",
        maxlength: "Field should not more then 6 characters",
      },
      studentAddress: {
        required: "Please provide Your Address",
        maxlength: "Field should not more then 50 characters",
      },
      studentCity: {
        required: "Please provide Your City",
        onlyLatters: "City Name should be text only",
        maxlength: "Field should not more then 50 characters",
      },
      studentState: {
        required: "Please provide Your State",
        onlyLatters: "State Name should be text only",
        maxlength: "Field should not more then 50 characters",
      },
      studentPin: {
        required: "Please provide Your PinCode",
        digits: "Please enter a valid Pin Code Number",
        minlength: "Please put 6 digit Pin number",
        maxlength: "Please put 6 digit pin number"
      },
      studentMobile: {
        required: "Please provide Your Mobile number",
        digits: "Please enter a valid Mobile Number",
        minlength: "Please put 10  digit mobile number",
        maxlength: "Please put 10  digit mobile number",
      },
      studentCollege: {
        required: "Please provide Your College Name",
        maxlength: "Field should not more then 50 characters",
      },
      trade: {
        required: "Please Select Your Trade",
      },
      studentPassY: {
        required: "Please provide Year of Passing",
        digits: "Please enter a valid Year Code Number",
        minlength: "year should not be less then 4 digits",
        maxlength: "year should not be more then 4 digits",
      },
      studentPer: {
        required: "Please provide Your Percentage",
        digits: "Enter valid Percentage and (.) not allow",
        maxlength: "Field should not more then 3 Numbers",
      },
      studentHSPer: {
        required: "Please provide Your High School Percentage",
        digits: "Enter valid Percentage and (.) not allow",
        maxlength: "Field should not more then 3 Numbers",
      },
      jobs: {
        required: "This field it mandatory",
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
  var end = new Date();
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  var options = {
    format: 'yyyy-mm-dd',
    endDate: '2010-01-01',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);

  // redio button for Experience
  $('input:radio[name="jobs"]').change(function() {
    if ($(this).val() == 'Yes') {
      $('.showExperienceCheckbox').removeClass('hide');
    } else {
      $('.showExperienceCheckbox').addClass('hide');
    }
  });
  var $subscribeInput = $('input[name="checkedEx"]');
  $subscribeInput.on('click', function() {
    if ($(this).is(':checked')) {
      $('.showExperienceDiv').removeClass('hide');
    } else {
      $('.showExperienceDiv').addClass('hide');
    }
  });
  var obj;
  $.when(Gethandler("/route/getCollegeLists", obj, true)).done(function(res) {
    $("#studentCollege").html(" ");
    if (res.resCode == 'OK') {
      $("#studentCollege").append('<option selected disabled>None</option>');
      for (var i = 0; i < res.results.length; i++) {
        $("#studentCollege").append('<option value="' + res.results[i]['Name'] + '">' + res.results[i]['Name'] + '</option>');
      }
    } else {
      swal({
          title: "Error!",
          text: "College List is empty",
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
        text: "fail to connect",
        type: "error"
      },
      function() {
        swal.close();
        window.location.href = '../login.html';
      });
  });

  $('#studentCollege').on('change', function() {
    var x = $(this).val();
    $("#trade").html(" ");
    $.when(Posthandler("/route/getCollegeWiseTradeLists", {
      "Name": x
    }, true)).done(function(res) {
      if (res.resCode == 'OK') {
        $("#trade").append('<option selected disabled>None</option>');
        for (var i = 0; i < res.results.length; i++) {
          $("#trade").append('<option value="' + res.results[i]['Trade'] + '">' + res.results[i]['Trade'] + '</option>');
        }
      } else {
        swal({
            title: "Error!",
            text: "This College Trades List empty",
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
          text: "fail to connect",
          type: "error"
        },
        function() {
          swal.close();
          window.location.href = '../login.html';
        });
    });
  });

  $.when(Gethandler("/route/getExperienceLists", obj, true)).done(function(res) {
    $("#studentExpYear").html(" ");
    if (res.resCode == 'OK') {
      $("#studentExpYear").append('<option selected disabled>None</option>');
      for (var i = 0; i < res.results.length; i++) {
        $("#studentExpYear").append('<option value="' + res.results[i]['Id'] + '">' + res.results[i]['experience'] + '</option>');
      }
      if ((secret == null) || (secret == "") || (secret == undefined)) {}
      else{
        extraInputWhileUpdateStudent();
      }
    } else {
      swal({
          title: "Error!",
          text: "Experience List is empty",
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
        text: "fail to connect",
        type: "error"
      },
      function() {
        swal.close();
        window.location.href = '../login.html';
      });
  });
});
function extraInputWhileUpdateStudent() {
    if (secret.Key === "Edit") {
      // $('#containerDiv').removeClass('hide');
      // $('.bodyloading').addClass('hide');
      var secretData = sessiongetItem("secretData");
      console.log(">>>>>>>>>>>>>>>",secretData[0]['College']);
      $("#studentCollege").html(" ");
      // $("#studentCollege option[value=" + secretData[0]['College'] + "]").prop('selected', true);
      $("#studentCollege").append('<option value="' + secretData[0]['College'] + '">' + secretData[0]['College'] + '</option>');
      $.when(Posthandler("/route/getCollegeWiseTradeLists", {
        "Name": secretData[0]['College']
      }, true)).done(function(res) {
        if (res.resCode == 'OK') {
          $("#trade").append('<option selected disabled>None</option>');
          for (var i = 0; i < res.results.length; i++) {
            $("#trade").append('<option value="' + res.results[i]['Trade'] + '">' + res.results[i]['Trade'] + '</option>');
          }
          $("#trade option[value=" + secretData[0]['Trade'] + "]").prop('selected', true);
          $("#studentCollege").attr("disabled", "disabled");
          $('#studentEmail').attr("disabled", "disabled");
          if(secretData[0]['Job'] == "Yes"){
            if(secretData[0]['Experience'] != "Fresher"){
              $('input[name="checkedEx"]').prop("checked", true);
              $('.showExperienceDiv').removeClass('hide');
            }
            $('.showExperienceCheckbox').removeClass('hide');
            $("#studentExpYear option[value=" + secretData[0]['ExpYear'] + "]").prop('selected', true);
            // }
          }
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
              window.location.href = '../login.html';
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
            window.location.href = '../login.html';
          });
      });
    }
}
