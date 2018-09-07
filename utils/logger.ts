import ENV from '../environment';

const success = [
  'background: green',
  'color: white',
  'display: block',
  'text-align: center'
].join(';');

const failure = [
  'background: red',
  'color: white',
  'display: block',
  'text-align: center'
].join(';');

class Logger {

  private consoleEnabled: boolean;

  constructor () {
    if (ENV.OPTS.logging) {
      this.consoleEnabled = false;
    }
  };

  success(...args) {
    console.log(`%c ${args}`, success);
  };
}

export default new Logger();