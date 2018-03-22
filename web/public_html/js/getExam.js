// function getExamFunction(){
  // // alert("Test");
  // var login = sessiongetItem("login");
  // var uname = login.Name;
  // var unumber = login.Number;
  // var urole = login.Role;
  // $('.anchLegend').html(headerBody);
  // $('.anchPara').addClass('hide');
  // $('.tablecontainerDiv').removeClass('hide');
  // $('.editDetails').removeClass('hide');
  // $('.bodyloading').removeClass('hide');
  // // $('.modal-content').removeClass('resumeModal');
  // // $('.resumePdf').addClass('hide');
  // aboutMe = {
  //   "Role": urole,
  //   "Name": uname,
  //   "Number": unumber,
  // };
  // // console.log(aboutMe);
  // $.when(Posthandler("/route/getExam", aboutMe, true)).done(function(res) {
  //   if (res.resCode == 'OK') {
  //     var arr = {};
  //     arr = res.results;
  //     $('#tablecontainerDiv').html("<section class='content'><div class='boxC'><table id='aboutMEeTable' class='cell-border display aboutMEeTable_header'  cellspacing=0 width=100%><thead class='leaveTable_header'><tr><th>Exam-Tital</th><th>Description</th><th>Orgniser</th><th>Shift</th><th>Count</th><th>Requirememnt</th><th>Date Of Exam</th></tr></thead><tbody class='aboutMeTable_body'></tbody></table></div></section>");
  //     $.each(arr, function(i, arr) {
  //       console.log(i,'   <<<<i');
  //       var body = "<tr>";
  //       body += "<td>" + arr["examTital"] + "</td>";
  //       body += "<td>" + arr["description"] + "</td>";
  //       body += "<td>" + arr["orgniser"] + "</td>";
  //       body += "<td>" + arr["shift"] + "</td>";
  //       body += "<td>" + arr["count"] + "</td>";
  //       body += "<td>" + arr["requirememnt"] + "</td>";
  //       body += "<td>" + moment(arr["date"]).format("YYYY-MM-DD") + "</td>";
  //       body += "</tr>";
  //       $("#aboutMEeTable tbody").append(body);
  //     });
  //     create_Datatable('#aboutMEeTable');
  //     $('.bodyloading').addClass('hide');
  //     // viewMoreFunction(arr, login);
  //   } else {
  //     swal("Error!", res.msg, "error");
  //   }
  // }).fail(function() {
  //   swal({
  //       title: "Error!",
  //       text: "fail to connect, Plese check your internet connection!",
  //       type: "error"
  //     },
  //     function() {
  //       swal.close();
  //       window.location.href = './dashboard.html';
  //     });
  // });
//
// };
// var headerBody = "<div class='float-left'>Exam Schedule</div><div class='float-right'><button class='addExam btn btn btn-primary' role='button'>Add New Exam Schedule</button></div>";
