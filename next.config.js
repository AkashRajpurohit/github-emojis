const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['github.githubassets.com'],
    path: '/_next/image',
    loader: 'default',
  },
});
