/**
 * Created by jonlazarini on 19/08/16.
 */
import { combineReducers } from 'redux';
import lastQuery from './lastQuery';

const reducers = combineReducers({
  lastQuery,
})

export default reducers
