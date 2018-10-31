import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/actionCreators';
import User from '../User';


const UserList = ({ userIds }) => (
    <ul>
      { userIds.map(id => <User key={id} id={id} />) }
    </ul>
   
);


export default connect(
  state => ({
    userIds: selectors.getUserIds(state),
  }),
  undefined,
)(UserList);