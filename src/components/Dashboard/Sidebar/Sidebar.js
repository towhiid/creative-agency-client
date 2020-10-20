import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
            <li>
                <Link to="/doctor/dashboard" className="text-dark">
                    <span>Order</span> 
                </Link>
            </li>
            <li>
                <Link to="/doctor/appointment" className="text-dark">
                     <span>Service List</span> 
                </Link>
            </li>
            <li>
                <Link to="/doctor/patients" className="text-dark">
                     <span>Review</span>
                </Link>
            </li>
            <li>
                <Link to="/addservice" className="text-dark" >
                   <span>Add Service</span>
                </Link>
            </li>
            <li>
                <Link to="/doctor/setting" className="text-dark" >
                   <span>Make Admin</span>
                </Link>
            </li>
        </ul>
        <div>
            <Link to="/" className="text-dark"><span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;