var nodemailer = require('nodemailer');

function emailProvider() {

  //from email:
  const fromEmail = 'tarislar@gmail.com';
  //emailserver token:
  const smtpToken = 'nwwhuqtjqvfjxhjc';

  //const transporter = nodemailer.createTransport('smtps://' + process.env.NODEMAILER_EMAIL + ':' + process.env.NODEMAILER_PASSWORD + '@smtp.gmail.com');
  const transporter = nodemailer.createTransport(`smtps://${fromEmail}:${smtpToken}@smtp.gmail.com`);

  this.sendEmail = function (mailObject, callback) {
    mailObject.from = `'EncoreLink' <${fromEmail}>`;

    transporter.sendMail(mailObject, function(err, info){
      if (err) {
        return callback(err);
      } else {
        callback(null, info);
      }
    });
  }
}

module.exports = emailProvider;
