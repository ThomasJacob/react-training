import React from 'react';

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(user){
          return (<li>{user}</li>)  
        })}
      </ul>
    )
  }
}

export default Users;