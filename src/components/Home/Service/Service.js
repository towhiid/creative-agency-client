import React from 'react';

const Service = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">

        {
            service.image ? <img style={{height: '200px'}} alt ="" src={`data:image/png;base64,${service.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${service.img}`} alt=""/>
        }
            <h4>{service.name.name}</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio.</p>
        </div>
    );
};

export default Service;