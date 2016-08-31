/**
 * Created by jonlazarini on 23/08/16.
 */

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

export default lastQuery