import { makeActionCreator } from '../redux/reducers';
import { Action } from './interfaces';

/*
 * action types
 */
const INCREMENT_STATE: string = 'INCREMENT_STATE';
const APPLICATION_STATE: string = 'APPLICATION_STATE';

/*
 * action creators
 */

export const incrementState: Action = makeActionCreator(INCREMENT_STATE, 'count');

export const setApplicationState: Action = makeActionCreator(APPLICATION_STATE, 'state');

