import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => {
    
            const {displayName, email} = result.user;
            const signedInUser = {displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        
          })
          .catch(error => {
            
            error = error.message;
            
          });
    }
    return (

        <div>
            <Navbar>
            <Navbar.Brand className='brand mx-auto' href="/"><img style= {{width:"100px", height:"40px"}} src="https://i.ibb.co/XZgxpn0/logo.png" alt=""/></Navbar.Brand>
            </Navbar>

        <div  onClick = {handleGoogleSignIn} style = {{paddingTop:"100px" }}>
                <h5 className = "text-center">Login With</h5>
                <img src="https://i.ibb.co/nRx7jF4/google.png" alt=""  width = "30"/>&nbsp;&nbsp;
                <button><h6>Continue With Google</h6></button>
        </div>
        </div>
    );
};

export default Login;