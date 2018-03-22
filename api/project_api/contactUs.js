const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var config = require('./../config/config.js');

var transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    type: config.authentication.type,
    user: config.authentication.user,
    clientId: config.authentication.clientId,
    clientSecret: config.authentication.clientSecret,
    refreshToken: config.authentication.refreshToken,
    accessToken: config.authentication.accessToken,
  },
})
var maillist = [
  config.maillist.admin1,
  config.maillist.admin2,
];
var contactUs = function(req, res, next) {
  console.log(req.body);

  var mailOptions = {
    from: req.body["contactEmail"],
    to: maillist,
    subject: req.body["contactSubject"],
    html: '<html><head><title>Contact Us</title></head><body><p><b>Hi Sir/Madam,</b></p><p>This is ' + req.body["contactName"] + ', requesting <b>' + req.body['contactText'] + '<b></p><p>Thanks & Regards,<br />' + req.body["contactName"] + '<p>Mobile-' + req.body["contactMobile"] + '</p><p>' + req.body["contactEmail"] + '</p><p><a href="https://greenticks.herokuapp.com">Redirect To Login</a></p>' + '</p></body></html>',
  };
  console.log("before");
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.json({
        "resCode": 'Error',
        "msg": "Error!"
      });
    } else {
      console.log('Message sent: ' + info.response);
      res.json({
        "resCode": "OK",
        "msg": "Mail Send Successfully!"
      });
    };
  });
};

module.exports = {
  contactUs : contactUs,
}
