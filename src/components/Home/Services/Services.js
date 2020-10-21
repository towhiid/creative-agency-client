import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://evening-mountain-50530.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className="container">
            <Link to = "/dashboard">
            <h5 style = {{color:"#000000", padding : "50px"}}>Provide awesome <span style= {{color: "#79b059"}}>services</span></h5>
                <div className="row">
                <div className="col-md-4 col-sm-6 text-center">
                <div className="card mb-5" style={{width: "18rem"}}>
                <img src="https://evening-mountain-50530.herokuapp.com/service1.png" alt="" style = {{height:"60px", width:"60px"}} className="img-fluid card-img-top mx-auto"/>
                <div class="card-body">
                    <h6>Web Design</h6>
                    <p className = "text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam.</p>
                </div>
                </div>
                
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                <div className="card mb-5" style={{width: "18rem"}}>
                <img src="https://evening-mountain-50530.herokuapp.com/service2.png" alt="" style = {{height:"60px", width:"60px"}} className="img-fluid card-img-top mx-auto"/>
                <div class="card-body">
                    <h6>Graphic Design</h6>
                    <p className = "text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam.</p>
                </div>
                </div>
                
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                <div className="card mb-5" style={{width: "18rem"}}>
                <img src="https://evening-mountain-50530.herokuapp.com/service3.png" alt="" style = {{height:"60px", width:"60px"}} className="img-fluid card-img-top mx-auto"/>
                <div class="card-body">
                    <h6>Web Development</h6>
                    <p className = "text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam.</p>
                </div>
                </div>
                
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                <div className="card mb-5" style={{width: "18rem"}}>
                <img src="https://evening-mountain-50530.herokuapp.com/service4.png" alt="" style = {{height:"60px", width:"60px"}} className="img-fluid card-img-top mx-auto"/>
                <div class="card-body">
                    <h6>Web App Design</h6>
                    <p className = "text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam.</p>
                </div>
                </div>
                
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                <div className="card mb-5" style={{width: "18rem"}}>
                <img src="https://evening-mountain-50530.herokuapp.com/service5.png" alt="" style = {{height:"60px", width:"60px"}} className="img-fluid card-img-top mx-auto"/>
                <div class="card-body">
                    <h6>Adobe Pro</h6>
                    <p className = "text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam.</p>
                </div>
                </div>
                
                </div>
                    
                </div>
            </Link>
            </div>
            
        </section>
    );
};

export default Services;