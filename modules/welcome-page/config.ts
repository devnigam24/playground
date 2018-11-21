module.exports = {
  config: {
    user: 'Devvrat'
  },

  getConfig: function () {
    return this.config;
  },

  setConfig: function (config) {
    this.config = config;
  }
};