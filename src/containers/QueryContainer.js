/**
 * Created by jonlazarini on 22/08/16.
 */

import { connect } from 'react-redux';

import Query from '../components/Query';



// best practice to delegate calc at the end as it s easier to maintain the
// state before rendering
// logic (calculation) done in container

// pass in state attributes controlled by the reducer .value
const mapStateToProps = ({lastQuery}) => ({ userQuery: lastQuery.value });

export default connect(mapStateToProps)(Query);