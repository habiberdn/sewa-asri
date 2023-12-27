const nodemailer = require('nodemailer');
const { convert } = require('html-to-text');
const pug = require('pug')



module.exports = class Email {
  constructor(user, url) {
    this.to = user.email? user.email : user; 
    // this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Sewa Asri`;
  }
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      //SendGrid
      return nodemailer.createTransport({
        host:'smtp-relay.brevo.com',
        port:587,
        auth: {
          user: process.env.BREVO_LOGIN,
          pass: process.env.BREVO_PASS,
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.PASSWORD_USERNAME,
      },
    });
  }
  //send the actual email
  async send(template, subject) {
    //1) Render HTML basend on pug template
    const html = pug.renderFile(
      `${__dirname}/../views/${template}.pug`,
      {
        // firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    //2) Redefine email option
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
      // html:
    };

    //3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours family');
  }

  async isEmail(){
    await this.send('email','Confirm your email!')
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid only for 10 minutes)'
    );
  }
};
