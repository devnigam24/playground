import { State, ActionType, Action } from '../constants/interfaces';

export const reducer = (state: State = {} as any, action: ActionType): State => {
  switch(action.type) {

    case 'INCREMENT_STATE': {
      const value = state.value + action.value;
      return (<any>Object).assign(state, { value });
    }

    case 'APPLICATION_STATE': {
      return(<any>Object).assign(state, {
        'applicationState': action.value
      });
    }

    default: {
      return state;
    }
  }
}

export const makeActionCreator = (type: string, ...args: Array<string>): Action => {
  return (...args: Array<any>) => {
    let action = { type };
    args.forEach(element => {
      action[element] = element;
    });
    return action;
  };
}
