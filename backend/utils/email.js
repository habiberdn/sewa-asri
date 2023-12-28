const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const pug = require('pug')

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email? user.email : user; 
    // this.firstName = user.name.split(' ')[0];
    this.url = url;
  }
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      //SendGrid
      return nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: 'dev.achmadjulian@gmail.com',
          pass: 'ZR8AjydLPsUg73MV',
        },
        debug:true,
        secure:false,
        tls: { rejectUnauthorized: false },
        logger: true 
      });
    }
    return nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 25,
      auth: {
        user: 'ba6619a53efc0b',
        pass: '8e790736717cf8',
      },
    });
  }
  //send the actual email
  async send(template, subject) {
    //1) Render HTML basend on pug template
    const html = pug.renderFile(
      `${__dirname}/../views/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );
   
    //2) Create a transport and send email
    await this.newTransport().sendMail({
      from: 'SewaAsri@brevo.com', // sender address
      to: this.to, // list of receivers
      subject,
      html // plain text body
    });
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
