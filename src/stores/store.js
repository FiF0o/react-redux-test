/**
 * Created by jonlazarini on 22/08/16.
 */

import { createStore } from 'redux';
import reducers from '../reducers';
console.log('reducers: ', reducers)

export default createStore(reducers)