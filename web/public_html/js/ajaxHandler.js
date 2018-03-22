var loginObj = sessiongetItem("login");

function Posthandler(url, dataArray, asyncType) {
  console.log("loginObj in side ajaxHandler------", loginObj);
  $.support.cors = true;
  return $.ajax({
    url: url,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(dataArray),
    datatype: "json",
    async: asyncType,
    // headers: {
    // 'X-access-Token' : loginObj.Tokan
    // },
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-access-Token', loginObj.Token);
    },
    success: function(resp) {},
    error: function(err) {}
  });
}

function Gethandler(url) {
  return $.ajax({
    url: url,
    type: 'GET',
    datatype: "json",
    async: true,
    success: function(res) {},
    error: function(err) {}
  });
}

function PosthandlerWOH(url, dataArray, asyncType) {
  $.support.cors = true;
  return $.ajax({
    url: url,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(dataArray),
    datatype: "json",
    async: asyncType,
    success: function(resp) {},
    error: function(err) {}
  });
}
