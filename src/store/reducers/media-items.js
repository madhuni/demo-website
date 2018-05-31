/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

/* This is the Reducer for the Media Items */

import * as actionType from '../actions/action-type';

const initialState = {
  firstRun: true,
  mediaItems: []
};

const reducer = (state = initialState, action) => {
  if (action.type === actionType.UPDATE_FIRST_RUN_MEDIA) {
    return {
      ...state,
      firstRun: action.value
    };
  }

  if (action.type === actionType.UPDATE_MEDIA_ITEMS) {
    return {
      ...state,
      mediaItems: state.mediaItems.concat(action.value)
    };
  }

  return state;
};

export default reducer;