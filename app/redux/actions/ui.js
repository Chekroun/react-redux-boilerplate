import * as actions from '../constants';

export function updateText(didUpdate) {
  return {
    type: actions.UPDATE_TEXT,
  };
}

export function incrementCounter() {
  return {
    type: actions.INCREMENT_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: actions.DECREMENT_COUNTER,
  };
}