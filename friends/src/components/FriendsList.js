import React, { useState, useEffect} from 'react'

import { axiosWithAuth } from './../utils/axiosWithAuth';
import AddFriend from './AddFriend'

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([])

  const getData = () => {
    axiosWithAuth()
    .get("/friends")
    .then(res=>{ 
      console.log('res',res);
      setFriendsList(res.data)
    }).catch(err=>{
      console.log(err);
    })
  };

  const addFriend = body => {
    //e.preventDefault()
    axiosWithAuth()
    .post('/friends', body)
    .then(res =>{
      console.log('addFriend res',res);
      getData()  
    })
    .catch(err =>{
      console.log('err',err);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return( 
    <div>
      <h1>Dementia Sucks. Remember My Friends</h1>
      <AddFriend addFriend={addFriend}/>
      {friendsList.map(e =>(
        <div className='friend' key={e.id} >
          <h2>{e.name}</h2>
          <p>age: {e.age} years</p>
          <p>email: {e.email} </p>
        </div>
      ))}
    </div>
  )
}

export default FriendsList