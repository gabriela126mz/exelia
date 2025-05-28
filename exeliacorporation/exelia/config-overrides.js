const WebpackObfuscator = require('webpack-obfuscator');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(
      new WebpackObfuscator(
        {
          rotateStringArray: true,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          compact: true,
          selfDefending: true,
        },
        []
      )
    );
  }
  return config;
};
