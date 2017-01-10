import * as nodemailer from 'nodemailer';

export default function () {
  const transporter = nodemailer.createTransport('smtps://' + process.env.NODEMAILER_EMAIL + ':' + process.env.NODEMAILER_PASSWORD + '@smtp.gmail.com');

  /**
   * Sends an email to an array of users, or object (depending on setup)
   * @param  {Array} emails - An array of emails to send an email to.
   * @param  {Object} email - An email object to send.
   * @param  {Function} callback - A callback to be called after the function goes to completion.
   * @return {Function} A callback with the response.
   */
  const sendEmail = (emails, email, callback) => {
    // If users is not an array, make an array from it.
    if (!(Array.isArray(emails))) emails = [emails];

    // Create a mail options object that contains the email information
    const mailOptions = {
      from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
      to: emails.join(), // receiver
      subject: email.subject, // Subject line
      text: email.text, // plaintext body
      html: email.body // html body
    };

    // Send email to with the options
    transporter.sendMail(mailOptions, (err) => {
      // If there is an error, return with that error
      if (err) return callback(err);

      // Return with a positive message
      return callback(null, {
        message: 'Email(s) successfuly sent.'
      });
    });
  };

  return {
    sendEmail,
    transporter
  };
}
