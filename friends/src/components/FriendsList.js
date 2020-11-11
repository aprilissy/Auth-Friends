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
        friendsList: res.friends
      })
    }).catch(err=>{
      console.log(err);
    })
  };

  render(){
    return( 
      <div>
        <h1>Dementia Sucks. Remember My Friends</h1>
      </div>
    )
  }
}

export default FriendsList