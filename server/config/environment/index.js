const path = require('path');
const merge = require('lodash/merge');

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

var all = {
  env: process.env.NODE_ENV,

  domain: process.env.DOMAIN || "localhost",

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9003,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'iot-traffic-lights-secret'
  },

  // MongoDB connection options
  mongo: {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },

  iotInspector: {
    domain: process.env.IOT_INSPECTOR_DOMAIN || 'http://localhost:46241'
  }
};

// Export the config object based on the NODE_ENV
module.exports = merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
