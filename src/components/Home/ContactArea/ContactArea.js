import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './ContactArea.css';

const ContactArea = () => {
    return (
       <section className = "row">
           <div className = "col-md-5 offset-md-1 col-sm-12 m-5">
            <h3>Let us handle your <br/> Project, Professionally.</h3>
            <br/>
            <p className= "text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod rerum, veniam ea quam saepe provident.</p>
           </div>
           <div className = "col-md-6 col-sm-12">
    <Form className = "m-5">
    <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Your Email Address" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Your Name/Company Name" />
    </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows="10" placeholder = "Your Message" />
  </Form.Group>

  <Button variant="dark" type="submit">
    Send
  </Button>
</Form>
           </div>
       </section>
    );
};

export default ContactArea;