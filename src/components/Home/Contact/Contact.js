import React from 'react';
import ContactArea from '../ContactArea/ContactArea';
import './Contact.css';
import Footer from './Footer/Footer';
const Contact = () => {
    return (
        <div className = "contact">
           <ContactArea></ContactArea> 
           <Footer></Footer>
        </div>
    );
};

export default Contact;