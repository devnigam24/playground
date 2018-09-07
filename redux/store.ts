import { State } from './interfaces';
import reducer from './reducers';

class Store {

  public state: State;

  constructor() {
    console.log('initiated store');
    this.state = {};
  }

  public getState(): State {
    return this.state;
  }

  public dispatch(action): void {
    this.state = reducer(this.state, action);
  }
}

export default {
  Store: new Store()
}