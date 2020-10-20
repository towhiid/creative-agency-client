import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from './components/AddService/AddService';
import Dashboard from './components/Dashboard/Dashboard';
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
        <Switch>
          <Route path="/home">
          <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addservice">
            <AddService />
          </Route>
          
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
         
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
