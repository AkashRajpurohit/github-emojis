const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = isProd
  ? withPWA({
      pwa: {
        dest: 'public',
      },
    })
  : {};
