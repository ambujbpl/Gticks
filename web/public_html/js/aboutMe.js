function aboutMeFunction() {
  var login = sessiongetItem("login");
  var uname = login.Name;
  var unumber = login.Number;
  var urole = login.Role;
  $('.anchLegend').html("About Me");
  $('.anchPara').addClass('hide');
  $('.tablecontainerDiv').removeClass('hide');
  $('.editDetails').removeClass('hide');
  $('.bodyloading').removeClass('hide');
  $('.modal-content').removeClass('resumeModal');
  $('.resumePdf').addClass('hide');
  aboutMe = {
    "Role": urole,
    "Name": uname,
    "Number": unumber,
  };
  // console.log(aboutMe);
  $.when(Posthandler("/route/aboutMe", aboutMe, true)).done(function(res) {
    if (res.resCode == 'OK') {
      // console.log(res);
      var arr = {};
      arr = res.results;
      $('#tablecontainerDiv').html("<section class='content'><div class='boxC'><table id='aboutMEeTable' class='cell-border display aboutMEeTable_header'  cellspacing=0 width=100%><thead class='leaveTable_header'><tr><th>Name</th><th>Email</th><th>Contact No</th><th>Role</th><th>Address</th><th>City</th><th>Pincode</th><th>Date of Join</th><th>More Information</th></tr></thead><tbody class='aboutMeTable_body'></tbody></table></div></section>");
      $.each(arr, function(i, arr) {
        var body = "<tr>";
        body += "<td>" + arr["Name"] + "</td>";
        body += "<td>" + arr["Email"] + "</td>";
        body += "<td>" + unumber + "</td>";
        body += "<td>" + urole + "</td>";
        body += "<td>" + arr["Address"] + "</td>";
        body += "<td>" + arr["City"] + "</td>";
        body += "<td>" + arr["Pincode"] + "</td>";
        body += "<td>" + moment(arr["Date"]).format("YYYY-MM-DD") + "</td>";
        body += "<td class='editrow' data-toggle='modal' data-target='#exampleModalLong' title='Click Here for " + arr["Name"] + " More Details '><i class='fa fa-info-circle'  aria-hidden='true'></i> Info </td>";
        body += "</tr>";
        $("#aboutMEeTable tbody").append(body);
      });
      create_DatatableAboutMe('#aboutMEeTable');
      $('.bodyloading').addClass('hide');
      viewMoreFunction(arr, login);
    } else {
      swal("Error!", res.msg, "error");
    }
  }).fail(function() {
    swal({
        title: "Error!",
        text: "fail to connect, Plese check your internet connection!",
        type: "error"
      },
      function() {
        swal.close();
        window.location.href = 'dashboard.html';
      });
  });
};

function viewMoreFunction(arr, login) {
  var viewMore = '<table style="width:100%" id="viewMoreTable" class="table-striped table-bordered"></table>';
  console.log(arr);
  $(".editrow").click(function(e) {
    $('#exampleModalLongTitle').html("View More About " + login.Role + " - " + login.Name);
    $('.modal-body').html(viewMore);
    $.each(arr[0], function(key, value) {
      var body = "<tr>";
      if (key === "Dob") {
        key = "Date of Birth";
        body += "<th>" + key + "</th><td>" + moment(value).format("YYYY-MM-DD") + "</td>";
      } else if (key === "Date") {
        key = "Date of Joining in our Portel";
        body += "<th>" + key + "</th><td>" + moment(value).format("YYYY-MM-DD") + "</td>";
      } else if (key === "YOI") {
        key = "Year Of Incorporation";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "POY") {
        key = "Passing Year";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "Per") {
        key = "Percentage";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "HSPer") {
        key = "Higher School Percentage";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "TPO_Name") {
        key = "TPO Name";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "TPO_Email") {
        key = "TPO Email";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "TPO_Mobile") {
        key = "TPO Mobile";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "HR_Name") {
        key = "HR Name";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "HR_Email") {
        key = "HR Email";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "HR_Mobile") {
        key = "HR Mobile";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "Job") {
        key = "Job Required";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "ExpYear") {
        key = "Total Year Of Experience";
        if(value==='NA')value = "Not Applicable";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "LastComp") {
        key = "Present Company";
        if(value==='NA')value = "Not Applicable";
        body += "<th>" + key + "</th><td>" + value + "</td>";
      } else if (key === "Logo") {

      } else {
        body += "<th>" + key + "</th><td>" + value + "</td>";
      }
      body += "</tr>";
      $("#viewMoreTable").append(body);
    });
  });
};
