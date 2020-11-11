import React, { useRef } from 'react'

const AddFriend =(props)=>{
  // state = {
  //   credentials: {
  //     friend:{
  //       name:'',
  //       age:'',
  //       email:''
  //     }
  //   }
  // }

  const nameRef = useRef()
  const ageRef = useRef()
  const emailRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    props.addFriend({
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value
    })
  }

  // handleChange = e =>{
  //   this.setState({
  //     credentials:{
  //       ...this.state.credentials.friend,
  //       [e.target.name]:e.target.value
  //     }
  //   })
  // }

  // addFriend = e => {
  //   e.preventDefault()
  //   axiosWithAuth()
  //   .post('/friends', this.state.credentials)
  //   .then(res =>{
  //     console.log('addFriend res',res);
      
  //     //this.props.getData()  
  //   })
  //   .catch(err =>{
  //     console.log('err',err);
  //   })
  // }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type='text'
          name='name'
          // value={this.state.credentials.name}
          // onChange={this.handleChange}
          ref={nameRef}
        />
        <label>Age</label>
        <input
          type='text'
          name='age'
          // value={this.state.credentials.age}
          // onChange={this.handleChange}
          ref={ageRef}
        />
        <label>Email</label>
          <input
          type='email'
          name='email'
          // value={this.state.credentials.email}
          // onChange={this.handleChange}
          ref={emailRef}
        />
        <button>Add New Friend</button>
      </form>
    </div>
  )
}

export default AddFriend