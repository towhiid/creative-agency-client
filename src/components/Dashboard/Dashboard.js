import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
            <Navbar>
            <Navbar.Brand className='brand' href="/"><img style= {{width:"100px", height:"40px"}} src="https://i.ibb.co/XZgxpn0/logo.png" alt=""/></Navbar.Brand>
            </Navbar>
            <div className = "container-fluid row">
            <div className = "col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className = "col-md-10">
                
            </div>
            </div>
        </section>
    );
};

export default Dashboard;