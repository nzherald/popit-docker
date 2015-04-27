/* Example production configuration file
*/

module.exports = {

  server: {
    port: 3000,
  },

  // Uncomment the line below to force all non-api urls to redirect
  to https
  force_https: process.env.FORCE_HTTPS == 'true' ? true : false,

  hosting_server: {
    host:       process.env.HOST,
    base_url:   process.env.BASE_URL,
    email_from: process.env.EMAIL_FROM,
  },
  instance_server: {
    base_url_format: process.env.BASE_URL_FORMAT,
    cookie_secret: process.env.COOKIE_SECRET,
    cookie_domain: process.env.COOKIE_DOMAIN,
  },
  email: {
    transport:         'SMTP',
    // this Docker image assumes an external SMTP server
    // See https://github.com/andris9/nodemailer-smtp-transport
    transport_options: {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    },
  },

  queue: {
    prefix: process.env.QUEUE_PREFIX,
  },
};
