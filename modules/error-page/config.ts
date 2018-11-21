module.exports = {
  config: {
    code: 404,
    message: 'Ahhhh!!! Thats Embarrassing... :( Something Went Wrong',
    stack: new Error().stack
  },

  getConfig: function() {
    return this.config;
  },

  setConfig: function (config) {
    this.config = config;
  }
};