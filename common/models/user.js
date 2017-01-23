var mailerService = require('../../server/server-utils/emailProvider');

module.exports = function(user) {
    var User = user;


    User.on('resetPasswordRequest', function(info){
      var MailService = new mailerService();
      var accessToken = info.accessToken.id;
      var email = info.email;
      var user_id = info.accessToken.userId;

      var resetURL = `http://localhost:8080/resetPassword/?id=${user_id}?token=${accessToken}`;

      var emailObject = {
        to: email,
        subject: 'Your EncoreLink account recovery',
        text: '',
        html: `Hi ${User.name},
          <p>Somebody recently asked to reset your EncoreLink password.</p>
          <p><a href='${resetURL}'>Click here to change your password.</a></p>
          `
      }

      MailService.sendEmail(emailObject, function(err, info){
        if (err) {
          return err.message;
        } else {
          return 'success';
        }
      });
//console.log(emailObject);
    });

};
