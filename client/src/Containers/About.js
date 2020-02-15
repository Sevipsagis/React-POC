import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

function About(){
    return(
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>Welcome to Healty Cafe Store</h3>
                <p className="title text-justify mt-4 mb-4">We are small restuarant focus on delicious food not healty food.
                Because healty body made from exercise so that eat the great food and go to exercise. !!!</p>
                <h5 className="text-success">from Healty Cafe</h5>
            </div>
            <Footer company="KMITL" email="58070037@kmitl.ac.th"/>
        </div>
    )
}

export default About;