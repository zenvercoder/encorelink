var nodemailer = require('nodemailer');

module.exports = function emailProvider(mailObject, callback) {
  //from email:
  var fromEmail = process.env.APP_EMAIL; // 'email-address'
  //emailserver token:
  var smtpToken = process.env.APP_EMAILPW; // 'smtpassword';
  //SMTP server
  var smtpServer = process.env.APP_SMTP; // 'smtp.domain.com';
  console.log(fromEmail, smtpToken, smtpServer);

  var smtpString = `smtps://${fromEmail}:${smtpToken}@${smtpServer}`;
  var transporter = nodemailer.createTransport(smtpString);

  mailObject.from = "'EncoreLink' <" + fromEmail + ">";
  
  return transporter.sendMail(mailObject, callback);
}