import { USER_QUERY } from './actions'

export const userQuery = (query) => ({
  // =>() returns an object whereas => { } expects a bloc of code ... {
  // return etc... }
  type: USER_QUERY,
  query
});