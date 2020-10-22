import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../../redux'

const UserContainer = ({ userData, fetchUsers }) =>  {
  useEffect(() => { fetchUsers() },[fetchUsers])
  return userData.loading ? 
  ( <div>loading users ...</div> ) 
  : 
  userData.error ? (<div> { userData.error} </div>) 
  : (<div>
      <h2>User List</h2>
      <div>
        {
          userData && userData.users && userData.users.map((user) => <h3> { user.name}</h3>)
        }
      </div>
    </div>)
}

const mapStateToProps = state => {
  return {
    userData: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
