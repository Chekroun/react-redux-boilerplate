import * as actions from '../constants';

const initialState = {
  error: null,
  isFetchingData: false,
  data: null,
};

export default function ui(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
