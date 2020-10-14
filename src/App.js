import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <div className = "App">
    <Router>
    <Header />
        <Switch>
          <Route path="/home">
          <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
          {/* <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute> */}
         
          <Route exact path="/">
            <Home />
          </Route>
          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </div>
  </UserContext.Provider>
  );
}

export default App;
