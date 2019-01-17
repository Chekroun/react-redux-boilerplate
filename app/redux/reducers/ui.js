import * as actions from '../constants';
import { actionChannel } from 'redux-saga/effects';

const initialState = {
  didUpdate: false,
  counter: 0,
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_TEXT:
      return Object.assign({}, state, {
        didUpdate: action.didUpdate,
      });
    case actions.INCREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter + 1,
      });
    case actions.DECREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter - 1,
      });
    default:
      return state;
  }
}
