function totalCompanyFunction() {
  $('.anchLegend').html("Total Companies");
  $('.anchPara').addClass('hide');
  $('.tablecontainerDiv').removeClass('hide');
  $('.resumePdf').addClass('hide');
  $('.editDetails').addClass('hide');
  $('.bodyloading').removeClass('hide');
  $('.modal-content').removeClass('resumeModal');
  var totalCompany = {};
  $.when(Gethandler("/route/totalCompany", totalCompany, true)).done(function(res) {
    if (res.resCode == 'OK') {
      console.log(res.results[0]);
      // var arr = {};
      var arr = res.results;
      $('#tablecontainerDiv').html("<section class='content'><div class='boxC'><table id='totalCompanyTable' class='cell-border display aboutMEeTable_header'  cellspacing=0 width=100%><thead class='leaveTable_header'><tr><th>Name</th><th>Contact No</th><th>Email</th><th>Website</th><th>Year Of Incorporation</th><th>Address</th><th>City</th><th>Pincode</th><th>More Information</th></tr></thead><tbody class='aboutMeTable_body'></tbody></table></div></section>");
      $.each(arr, function(i, arr) {
        var body = "<tr>";
        body += "<td>" + arr["Name"] + "</td>";
        body += "<td>" + arr["Landline"] + "</td>";
        body += "<td>" + arr["Email"] + "</td>";
        body += "<td>" + arr["Website"] + "</td>";
        body += "<td>" + arr["YOI"] + "</td>";
        body += "<td>" + arr["Address"] + "</td>";
        body += "<td>" + arr["City"] + "</td>";
        body += "<td>" + arr["Pincode"] + "</td>";
        body += "<td class='editrow' data-toggle='modal' data-target='#exampleModalLong' title='Click Here for " + arr["Name"] + " More Details '><i class='fa fa-info-circle'  aria-hidden='true'></i> Info </td>";
        body += "</tr>";
        $("#totalCompanyTable tbody").append(body);
      });
      create_DatatableTOtalCompany('#totalCompanyTable');
      $('.bodyloading').addClass('hide');
      viewMoreFunctionForCompany(arr);
    } else {
      swal("Error!", res.msg, "error");
    }
  }).fail(function() {
    swal({
        title: "Error!",
        text: "fail to connect",
        type: "error"
      },
      function() {
        swal.close();
        window.location.href = 'dashboard.html';
      });
  });
};

function viewMoreFunctionForCompany(arr) {
  var viewMore = '<table style="width:100%" id="viewMoreTable" class="table-striped table-bordered"></table>';
  console.log(arr);
  $(".editrow").click(function(e) {
    var Name = $(this).parents('tr').find('td:first').html();
    console.log(Name);
    $('#exampleModalLongTitle').html("View More About " + Name);
    $('.modal-body').html(viewMore);
    viewMoreCompanyByName = {
      "Name": Name,
    };
    $.when(Posthandler("/route/viewMoreCompanyByName", viewMoreCompanyByName, true)).done(function(res) {
      if (res.resCode == 'OK') {
        console.log(res.results[0]);
        $.each(res.results[0], function(key, value) {
          var body = "<tr>";
          if (key === "Date") {
            key = "Date of Joining in our Portel";
            body += "<th>" + key + "</th><td>" + moment(value).format("YYYY-MM-DD") + "</td>";
          } else if (key === "HR_Name") {
            key = "HR Name";
            body += "<th>" + key + "</th><td>" + value + "</td>";
          } else if (key === "HR_Email") {
            key = "HR Email";
            body += "<th>" + key + "</th><td>" + value + "</td>";
          } else if (key === "HR_Mobile") {
            key = "HR Mobile";
            body += "<th>" + key + "</th><td>" + value + "</td>";
          } else if (key === "YOI") {
            key = "Year Of Incorporation";
            body += "<th>" + key + "</th><td>" + value + "</td>";
          } else if (value === "NA" || value === "No") {

          } else if (key === "Logo") {

          } else {
            body += "<th>" + key + "</th><td>" + value + "</td>";
          }
          body += "</tr>";
          $("#viewMoreTable").append(body);
        });
      } else {
        swal("Error!", res.msg, "error");
      }
    }).fail(function() {
      swal({
          title: "Error!",
          text: "fail to connect",
          type: "error"
        },
        function() {
          window.location.href = 'dashboard.html';
        });
    });
  });
};
