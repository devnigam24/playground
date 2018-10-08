class CreateConfig {

  private initialContext = {
    welcomeMessage: "Devvrat"
  };

  constructor() {}

  getConfig = () => this.initialContext;
}

module.exports = () => new CreateConfig().getConfig();