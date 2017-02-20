var nodemailer = require('nodemailer');

function emailProvider() {

  //define environment variables for e-mail
  if (!process.env.APP_EMAIL || !process.env.APP_EMAILPW || !process.env.APP_SMTP) {
    console.log("WARNING: No email address or password provided as environment variable - app cannot send email.")
    if (process.env.NODE_ENV == 'production'){
      process.exit();
    }
  }
  //from email:
  var fromEmail = process.env.APP_EMAIL; // 'email-address'
  //emailserver token:
  var smtpToken = process.env.APP_EMAILPW; // 'smtpassword';
  //SMTP server
  var smtpServer = process.env.APP_SMTP; // 'smtp.domain.com';

  var smtpString = `smtps://${fromEmail}:${smtpToken}@${smtpServer}`;
  var transporter = nodemailer.createTransport(smtpString);

  this.sendEmail = function (mailObject, callback) {
    mailObject.from = "'EncoreLink' <" + fromEmail + ">";

    transporter.sendMail(mailObject, function(err, info){
      if (err) {
        return callback(err);
      } else {
        callback(null, info);
        //console.log("Email sent...");
      }
    });
  }
}

module.exports = emailProvider;
