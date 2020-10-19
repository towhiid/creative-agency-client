import React from 'react';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Works from './Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BusinessInfo></BusinessInfo>

            <Works></Works>

            <Contact></Contact>
        </div>
    );
};

export default Home;