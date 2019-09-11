import { ActionType, StateType } from 'typesafe-actions';
import AppActionCreator from '../actions'
import AppReducers from '../reducers'
import store from '.';


declare module 'typesafe-actions' {
  export type Store = StateType<typeof store>;
  export type RootAction = ActionType<typeof AppActionCreator>;
  export type RootState = StateType<typeof AppReducers>;

  interface Types {
    RootAction: RootAction;
  }
}
