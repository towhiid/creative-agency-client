import React from 'react';

const HeaderMain = () => {
    return (
        <main className ="row d-flex align-items-center pb-5">
            <div className = "col-md-4 offset-md-1">
                <h1><strong>Let's Grow Your <br/> Brand To The <br/> Next Level</strong></h1>
                <p className = "text-secondary"><div className="20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iste magni obcaecati voluptas fuga mollitia debitis et eligendi doloribus. Magni, voluptas aliquid?</div></p>
                <button className = "btn btn-dark"> Hire us</button>
            </div>
            <div className = "col-md-6">
            <img src="https://i.ibb.co/mty9Z06/Frame.png" alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;