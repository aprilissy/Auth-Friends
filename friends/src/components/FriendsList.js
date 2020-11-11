import React from 'react'

import { axiosWithAuth } from './../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friendsList: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
    .get("/friends")
    .then(res=>{ 
      console.log('res',res);
      this.setState({
        friendsList: res.data
      })
    }).catch(err=>{
      console.log(err);
    })
  };

  render(){
    return( 
      <div>
        <h1>Dementia Sucks. Remember My Friends</h1>
        {this.state.friendsList.map(e =>(
          <div className='friend' key={e.id} >
            <h2>{e.name}</h2>
            <p>age: {e.age} years</p>
            <p>email: {e.email} </p>
          </div>
        ))}
      </div>
    )
  }
}

export default FriendsList