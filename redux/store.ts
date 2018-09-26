import { State } from '../constants/interfaces';
import { reducer } from './reducers';

const initialState = {
  applicationState: null,
  value: 0,
};

class Store {

  public state: State;

  constructor() {
    this.state = initialState;
  }

  public getState(): State {
    return this.state;
  }

  public dispatch(action): void {
    this.state = reducer(this.state, action);
  }
}

export default new Store();
