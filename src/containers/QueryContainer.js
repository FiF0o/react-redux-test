/**
 * Created by jonlazarini on 22/08/16.
 */

import { connect } from 'react-redux';

import Query from '../components/Query';



// best practice to delegate calc at the end as it s easier to maintain the
// state before rendering
// logic (calculation) done in container

// pass in state attributes controlled by the reducer .value
// lastQuery comes from the reducer and lastQuery.value is a part of the
// state of the app we want to change
// change is triggered by the action creator (e.g userQuery) which pass down
// a prop (e.g. onUserSubmit) in a container
// available in SearchContainer
const mapStateToProps = ({lastQuery}) => ({ userQuery: lastQuery.value });

export default connect(mapStateToProps)(Query);