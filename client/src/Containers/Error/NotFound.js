import React from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

function NotFound(){
    return (
        <div>
            <Header />
            <div className="container col-md-8 text-center">
                <h1 className="mt-5" style={{fontSize: 120}}>404</h1>
                <h2 className="mb-5">Not Found</h2>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;