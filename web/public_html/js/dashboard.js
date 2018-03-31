$(document).ready(function() {
  // initial loading script role wise dynamic append
  var login = sessiongetItem("login");
  console.log("login obj in dashboard>>>>",login);
  var uname = login.Name;
  var unumber = login.Number;
  var urole = login.Role;
  // if (urole == "Admin") {
  //   $('.addNewUser').removeClass('hide');
  // } else {
  //   $('.addNewUser').addClass('hide');
  // }
  $('.page-header').html("<div><i class='fa fa-tachometer' aria-hidden='true'></i> Dashboard " + urole + " - <span class='username'>" + uname + "</span></div>");
  $('.bodyloading').addClass('hide');
  $('#containerDiv').removeClass('hide');
  var obj;
  // $.when(Gethandler("/route/total", obj, true)).done(function(res) {
  //   console.log(res);
  //   if (res.resCode == "OK") {
  //     $('.total-company').html(res.Total_Company);
  //     $('.total-iti').html(res.Total_ITI);
  //     $('.total-student').html(res.Total_Student);
  //     $('.bodyloading').addClass('hide');
  //     $('#containerDiv').removeClass('hide');
  //   } else {
  //     swal("Error!", res.message, "error");
  //     $('.bodyloading').addClass('hide');
  //     $('#containerDiv').removeClass('hide');
  //   }
  // }).fail(function() {
  //   swal("Error!", "sorry unable to load Data. please check your internet connection", "error");
  //   $('.bodyloading').addClass('hide');
  //   $('#containerDiv').removeClass('hide');
  // });
  if (login.Role == 'Admin') {
    $('#insertMyCard').append(admMyCard);
  } else if (login.Role == 'Higher') {
    $('#insertMyCard').append(camMyCard);
  } else if (login.Role == 'Invigilator') {
    $('#insertMyCard').append(colMyCard);
  } else if (login.Role == 'Employee') {
    $('#insertMyCard').append(stuMyCard);
  }
  // for dashboard click function
  $(".aboutgreenTicks").click(function() {
    $('#exampleModalLongTitle').html("About GreenTicks Bhopal");
    $('.modal-body').html(y);
  });
  $('.contactUs').click(function() {
    $('#exampleModalLongTitle').html("Contact @GreenTicks");
    $('.modal-body').html(" ");
    $('.modal-body').load("./contactUs.html");
  });
  $('#changepass').click(function() {
    change = {
      "Name": login.Name,
      "Number": login.Number,
      "Role": login.Role,
      "Email": login.Email,
      "Key": "Change"
    };
    console.log(change);
    sessionsetItem("change", change);
    window.location.replace("html/forgot-Password.html");
  });
  // for addNewUser click function
  $('#addNewUser').click(function() {
    window.location.replace("html/sign-up.html");
  });
  $('.addExam').click(function(){
    alert("Test");
  });
  // for help click function open modal
  // $('.help').click(function() {
  //   $('#exampleModalLongTitle').html("Help");
  //   $('html,body').animate({
  //     scrollTop: $("#contact-form").offset().top
  //   }, 800);
  // });
  // for profile click function open modal
  $('.profile').click(function() {
    $('.modal-content').removeClass('resumeModal');
    $('.editDetails').addClass('hide');
    $('.resumePdf').addClass('hide');
    $('#exampleModalLongTitle').html("Profile");
    $('.modal-body').html("<div style='text-align: center';><img src='../img/student.png' style='border-radius: 50%' alt='Profile Image' height='102' width='102'><br><br><table class='myTable table-striped table-bordered'><tr><td>Name</td><td>" + uname + "</td></tr><tr><td>Number</td><td>" + unumber + "</td></tr><tr><td>Role</td><td>" + urole + "</td></tr><table></div>");
  });
  // for dashboard click function
  $('.logout').click(function() {
    // $('.listComDetailsDiv').addClass('hide');
    console.log("logout function");
    var obj = {};
    $.when(Posthandler("/logout", obj, true)).done(function(res) {
      console.log(res);
      if (res.resCode === "OK") {
        sessionremoveItem("login");
        sessionremoveItem("newAdmin");
        sessionremoveItem("secret");
        window.location.replace("login.html");
      } else {
        console.log(res.message + "else");
        window.location.replace("login.html");
      }
    }).fail(function() {
          console.log("logout function fail");
      swal("Error!", "sorry unable to logout. please check your internet connection", "error");
      window.location.replace("login.html");
    });
  });
  // for add activeA class in comman list component in Sidebar on-click function
  $('.listComA').click(function() {
    $('.viewDetailsDiv').removeClass('hide');
    $('.listComA').removeClass('activeA');
    $(this).addClass('activeA');
    $('html,body').animate({
      scrollTop: $(".viewDetailsDiv").offset().top
    }, 800);
  });
  // for Sidebar anch0 click function total Invigilator button
  $('.anch0').click(function() {
    getInvigilatorFunction();
  });
  // for Sidebar anch1 click function add Invisilator View More
  $('.anch1').click(function() {
    addInvigilatorsFunction();
  });
  // for Sidebar anch2 click function Total ITI College Listed
  $('.anch2').click(function() {
    getExamFunction();
  });
  // for Sidebar anch3 click function get Attendance
  $('.anch3').click(function() {
    getAttendanceFunction();
  });
  // for Sidebar anch4 click function Add Attendance
  $('.anch4').click(function() {
    addAttendanceFunction();
  });
  // for Sidebar anch5 click function ADD Employee
  $('.anch5').click(function() {
    addEmployeeFunction();
  });
  // for Sidebar anch6 click function Total Employee
  $('.anch6').click(function() {
    totalEmployeeFunction();
  });
  // Back to Top
  backToTop();
  // editDetails in modal Table for only about me!
  $('.editDetails').click(function() {
    secret = {
      "Name": login.Name,
      "Number": login.Number,
      "Role": login.Role,
      "Key": "Edit"
    };
    console.log(secret);
    sessionsetItem("secret", secret);
    window.location.replace("html/sign-up.html");
  });

});
function addInvigilatorsFunction() {
  $('.anchLegend').html("Add New Invigilators");
  $('.anchPara').load('./addInvigilators.html');
  $('.anchPara').removeClass('hide');
  $('.tablecontainerDiv').addClass('hide');
  // $('.modal-content').removeClass('resumeModal');
};
function addEmployeeFunction() {
  $('.anchLegend').html("Add New Employee");
  $('.anchPara').load('./addEmployee.html');
  $('.anchPara').removeClass('hide');
  $('.tablecontainerDiv').addClass('hide');
  // $('.modal-content').removeClass('resumeModal');
};
function getExamFunction() {
  // $('.anchLegend').html("Add New Invigilators");
  // $('.anchPara').load('./addInvigilators.html');
  // $('.anchPara').removeClass('hide');
  // $('.tablecontainerDiv').addClass('hide');
  // // $('.modal-content').removeClass('resumeModal');
  // alert("Test");
  $('.anchLegend').html('Exam Schedule');
  $('.anchPara').load('./addExam.html');
  $('.anchPara').removeClass('hide');
  // $('.anchPara').addClass('hide');
  $('.tablecontainerDiv').removeClass('hide');
  $('.editDetails').removeClass('hide');
  $('.bodyloading').removeClass('hide');
  // $('.modal-content').removeClass('resumeModal');
  // $('.resumePdf').addClass('hide');
  aboutMe = {
  };
  // console.log(aboutMe);
  $.when(Posthandler("/route/getExam", aboutMe, true)).done(function(res) {
    if (res.resCode == 'OK') {
      var arr = {};
      arr = res.results;
      $('#tablecontainerDiv').html("<section class='content'><div class='boxC'><table id='aboutMEeTable' class='cell-border display aboutMEeTable_header'  cellspacing=0 width=100%><thead class='leaveTable_header'><tr><th>Exam-Tital</th><th>Description</th><th>Orgniser</th><th>Shift</th><th>Count</th><th>Requirememnt</th><th>Date Of Exam</th></tr></thead><tbody class='aboutMeTable_body'></tbody></table></div></section>");
      $.each(arr, function(i, arr) {
        console.log(i,'   <<<<i');
        var body = "<tr>";
        body += "<td>" + arr["examTital"] + "</td>";
        body += "<td>" + arr["description"] + "</td>";
        body += "<td>" + arr["orgniser"] + "</td>";
        body += "<td>" + arr["shift"] + "</td>";
        body += "<td>" + arr["count"] + "</td>";
        body += "<td>" + arr["requirement"] + "</td>";
        body += "<td>" + moment(arr["date"]).format("YYYY-MM-DD") + "</td>";
        body += "</tr>";
        $("#aboutMEeTable tbody").append(body);
      });
      create_Datatable('#aboutMEeTable');
      $('.bodyloading').addClass('hide');
      // viewMoreFunction(arr, login);
    } else {
      swal("Error!", res.message, "error");
    }
  }).fail(function() {
    swal({
        title: "Error!",
        text: "fail to connect, Plese check your internet connection!",
        type: "error"
      },
      function() {
        swal.close();
        window.location.href = './dashboard.html';
      });
  });

};
function getAttendanceFunction(){
  $('.anchLegend').html(" Employee Attendance");
  $('.anchPara').load('./getAttendanceEmployee.html');
  $('.anchPara').removeClass('hide');
  $('.tablecontainerDiv').addClass('hide');
};

function addAttendanceFunction(){
  $('.anchLegend').html("Add Employee Attendance");
  $('.anchPara').load('./addAttendanceEmployee.html');
  $('.anchPara').removeClass('hide');
  $('.tablecontainerDiv').html('');
  $('.tablecontainerDiv').addClass('hide');
};

$.validator.setDefaults({
  submitHandler: function() {
    myFunction();
  }
});
var x = '<div class="formTitle border greenTicks-Padding5"><div class="row no-margin headerDiv2"><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 no-padding"><label for="validation1">Name<i class="red"> &#42</i></label><input type="text" class="form-control" id="validation1" placeholder="Your Name" value="" required=""></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 no-padding"><label for="validation2">Mobile<i class="red"> &#42</i></label><input type="text" class="form-control" id="validation2" placeholder="Your Number" value="" required=""></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 no-padding"><label for="validation2">Email<i class="red"> &#42</i></label><input type="text" class="form-control" id="validation2" placeholder="Your Email" value="" required=""></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding"><label for="validation2">Message<i class="red"> &#42</i></label><textarea class="form-control" rows="2" id="comment" placeholder="Enter Your Message"></textarea></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding"><button type="submit" class="btn btn-primary btn-sm" name="signup" value="Sign up">Submit</button></div></div></div>';

var admMyCard = "<div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/aboutMe.jpg' alt='Add Invigilator' width='65' height='65'><div class='total-cssD total-company'>0</div><div class='greenTicks-dtitle'>Add Employee</div><p class='no-margin no-padding'><button class='anch5 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/aboutMe.jpg' alt='Add Invigilator' width='65' height='65'><div class='total-cssD total-company'>0</div><div class='greenTicks-dtitle'>Total Employee</div><p class='no-margin no-padding'><button class='anch6 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/aboutMe.jpg' alt='Add Invigilator' width='65' height='65'><div class='total-cssD total-company'>0</div><div class='greenTicks-dtitle'>Add Invigilator</div><p class='no-margin no-padding'><button class='anch1 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/invigilator.jpg' alt='Total Invigilator' width='65' height='65'><div class='total-cssD'><i class='fa fa-cog' aria-hidden='true'></i></div><div class='greenTicks-dtitle'>Total Invigilator</div><p class='no-margin no-padding'><button class='anch0 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/online-exam.jpg' alt='Online Exam' width='65' height='65'><div class='total-cssD total-greenticks'>0</div><div class='greenTicks-dtitle'>Exam Schedule</div><p class='no-margin no-padding'><button class='anch2 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/attendance.jpg' alt='Total Attendance image' width='65' height='65'><div class='total-cssD total-student'>0</div><div class='greenTicks-dtitle'>Add Attendance</div><p class='no-margin no-padding'><button class='anch4 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/attendance.jpg' alt='View Attendance image' width='65' height='65'><div class='total-cssD total-student'>0</div><div class='greenTicks-dtitle'>View Attendance</div><p class='no-margin no-padding'><button class='anch3 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div>";

var camMyCard = "<div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/aboutMe.jpg' alt='About Me image' width='65' height='65'><div class='total-cssD'><i class='fa fa-cog' aria-hidden='true'></i></div><div class='greenTicks-dtitle'>About Me</div><p class='no-margin no-padding'><button class='anch0 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/itiicon.png' alt='Total ITI image' width='65' height='65'><div class='total-cssD total-iti'>0</div><div class='greenTicks-dtitle'>Total ITI Listed</div><p class='no-margin no-padding'><button class='anch2 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/student.png' alt='Total Students image' width='65' height='65'><div class='total-cssD total-student'>0</div><div class='greenTicks-dtitle'>Total Students</div><p class='no-margin no-padding'><button class='anch3 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div>";

var colMyCard = "<div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/aboutMe.jpg' alt='About Me image' width='65' height='65'><div class='total-cssD'><i class='fa fa-cog' aria-hidden='true'></i></div><div class='greenTicks-dtitle'>About Me</div><p class='no-margin no-padding'><button class='anch0 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/company.png' alt='Total Company image' width='65' height='65'><div class='total-cssD total-company'>0</div><div class='greenTicks-dtitle'>Total Companies</div><p class='no-margin no-padding'><button class='anch1 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/student.png' alt='Total Students image' width='65' height='65'><div class='total-cssD total-student'>0</div><div class='greenTicks-dtitle'>Total Students</div><p class='no-margin no-padding'><button class='anch3 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div>";

var stuMyCard = "<div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/aboutMe.jpg' alt='About Me image' width='65' height='65'><div class='total-cssD'><i class='fa fa-cog' aria-hidden='true'></i></div><div class='greenTicks-dtitle'>About Me</div><p class='no-margin no-padding'><button class='anch0 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div><div class='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 greenTicks-Padding5'><div class='greenTicks-DivBod greenTicks-Padding10 greenTicks-DivCen greenTicks-DivCenD'><img class='img-rounded borderImage' src='../img/company.png' alt='Total Company image' width='65' height='65'><div class='total-cssD total-company'>0</div><div class='greenTicks-dtitle'>Total Companies</div><p class='no-margin no-padding'><button class='anch1 btn btn btn-primary listComA' role='button'>View details &raquo;</button></p></div></div>";

var y = 'Green Ticks is providing multiple services in Pan India level. We have a good infrastructure and skilled manpower to cater the need of successfully conducting the Examinations whether it is Online or Offline in Pan India.';

// var headerBody = "<div class='float-left'>Exam Schedule</div><div class='float-right'><button class='addExam btn btn btn-primary' role='button'>Add New Exam Schedule</button></div>";
