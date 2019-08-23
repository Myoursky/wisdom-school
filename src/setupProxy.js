const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/frontapi', {
    target: 'https://www.lcrsinfo.com'
  }));
};
