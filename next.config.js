// next.config.js
module.exports = {
    webpack: (config) => {
      config.resolve.alias.canvas = false;
      return config;
    },
  };