import { ActionType } from './interfaces';

/*
 * action types
 */
const INCREMENT_STATE: string = 'INCREMENT_STATE';
const ADD_TWO_NUMBERS: string = 'ADD_TWO_NUMBERS';

/*
 * action creators
 */

export function addTwoNumbers(a: number,b: number): ActionType {
  return {
    type: ADD_TWO_NUMBERS,
    value: a + b
  }
}

export function incrementState(count: number): ActionType {
  return {
    type: INCREMENT_STATE,
    value: 1
  }
}