const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/kaira',
    createProxyMiddleware({
      target: 'http://localhost:5000', // Replace with your Flask server URL
      changeOrigin: true,
    })
  );
};