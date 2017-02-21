var mailerService = require('../../server/server-utils/emailProvider');

module.exports = function(user) {
    var User = user;


    User.on('resetPasswordRequest', function(info){
      var accessToken = info.accessToken.id;
      var email = info.email;
      var user_id = info.accessToken.userId;

      if (!process.env.APP_URL) {
        console.log("WARNING: No APP_URL defind. Cannot compose reset link in user.js");
      }

      var resetURL = process.env.APP_URL + '/resetPassword/?id=' + user_id + '&token=' + accessToken;
   
      var emailObject = {
        to: email,
        subject: 'Your EncoreLink account recovery',
        text: '',
        html: `Hi ${User.name},
              <p>Somebody recently asked to reset your EncoreLink password.</p>
              <p><a href='${resetURL}'>Click here to change your password.</a></p>`
      }

      mailerService(emailObject, (err) => {
        if (err) throw err;

        console.log('Email sent.')
      })
    });

};
