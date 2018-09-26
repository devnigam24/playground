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

  constructor (isActive) {
    this.consoleEnabled = isActive;
  };

  public _success(...args) {
    if (this.consoleEnabled) {
      console.log(`%c ${args}`, success);
    }
  };

  public _failure(...args) {
    if (this.consoleEnabled) {
      console.log(`%c ${args}`, failure);
    }
  };

  public _performanceLog(name, duration) {
    const style = this.getStyle(duration);
    if (this.consoleEnabled) {
      console.log(`${name} took ${duration*100} ms`);
    }
  };

  private getStyle(duration) {
    return duration < 100 ? success : failure;
  }
}

export default new Logger(ENV.OPTS.logging);