/**
 * Created by jonlazarini on 19/08/16.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import store from '../stores/store'

import { userQuery } from '../actions/actionCreators';
console.log('userQuery: ', userQuery);

import Search from '../components/Search';

// const mapStateToProps = ({ userQuery }) => ({ onUserSubmit : userQuery.value });

/*
 prends props de Search quand connect()
 triggers UI rendering with dispatch method by passing in { onUserSubmit:
 userQuery } object
*/
const mapDispatchToActionCreators = (dispatch) =>
 // passing down onUserSubmit prop to Search component with the action
  // creator userQuery
  bindActionCreators({ onUserSubmit: userQuery }, dispatch);

// const mapDispatchToActionCreators = () => ({
//   onUserSubmit: (q) => store.dispatch(userQuery(q))
// })

export default connect(undefined, mapDispatchToActionCreators)(Search);