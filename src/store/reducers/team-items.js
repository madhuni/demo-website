/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

/* This is the Reducer for the Team Items */

import * as actionType from '../actions/action-type';

const initialState = {
  firstRun: true,
  teamItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_FIRST_RUN_TEAM:
      return {
        ...state,
        firstRun: action.value
      };
      break;

    case actionType.UPDATE_TEAM_ITEMS:
      return {
        ...state,
        teamItems: state.teamItems.concat(action.value)
      };
      break;
  
    default:
      return state;
      break;
  }
};

export default reducer;