import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className="container">
            <Link to = "/dashboard">
            <h5 style = {{color:"#000000", padding : "50px"}}>Provide awesome <span style= {{color: "#79b059"}}>services</span></h5>
                <div className="row">
                    {
                     services.map(service =><Service key={service._id} service={service} />)
                    }
                    
                </div>
            </Link>
            </div>
            
        </section>
    );
};

export default Services;