/**
 * Created by jonlazarini on 19/08/16.
 */
import { combineReducers } from 'redux';

const initialState = {
  exist: false,
  value: ''
}

// pass in the action creator
const lastQuery = (state = initialState, action) => {
  console.log('action in reducers: ', action);
  switch (action.type) {
    case 'USER_QUERY': {

      const query = action.query;

      if (query === '') {
        return state;
      }

      return {
        exist: true,
        value: query
      }
    }
    // case default
    default : {
        return state
      }
  }
}


const reducers = combineReducers({
  lastQuery
})

export default reducers
