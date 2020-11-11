import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute';

import { axiosWithAuth } from './utils/axiosWithAuth.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {      
        localStorage.removeItem('token')
        setLoggedIn(false)
      })
      .catch(err => {
        console.log('Logout error', err);
      })
  }
  
  return (
   <Router>
      <div className="App">
      <ul>
          { (!loggedIn) ? (<li> <Link to="/login">Login</Link></li>) : (<div></div>) }
          <li>
            <Link to="#" onClick={logout}>Logout</Link>
          </li>
          { (loggedIn) ? (<li> <Link to="/protected">Friends Page</Link></li>) : (<div></div>) }
        </ul>

      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />  
        <Route path='/login' render={(props) => {return <Login {...props} setLoggedIn={setLoggedIn} /> }}/>
        <Route component={Login} />
      </Switch>
      </div>
   </Router>
  );
}

export default App;
