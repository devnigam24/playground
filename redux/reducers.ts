import { State, ActionType } from './interfaces';

export default function reducer(state: State = {} as any, action: ActionType) {
  switch(action.type) {

    case 'ADD_TWO_NUMBERS': {
      const { value } = state;
      console.log(value);
      return state
    }

    case 'INCREMENT_STATE': {
      const value = state.value + action.value;
      state.value = value;
      return state;
    }

    default: {
      return state;
    }
  }
}
