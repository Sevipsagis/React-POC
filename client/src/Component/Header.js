import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()}
        setInterval(() => this.counter(), 1000);
    }
    counter(){
        this.setState({date : new Date()})
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success"><img style={{height: 70}} src="/images/logo/logo.png" alt="" />Healthy Cafe</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                        <ul className="list-inline">
                            <li className="title list-inline-item"><Link to="/" className="text-success">Home</Link></li>
                            <li className="title list-inline-item">|</li>
                            <li className="title list-inline-item"><Link to="/order" className="text-success">Orders</Link></li>
                            <li className="title list-inline-item">|</li>
                            <li className="title list-inline-item"><Link to="/product" className="text-success">Product</Link></li>
                            <li className="title list-inline-item">|</li>
                            <li className="title list-inline-item"><Link to="/about" className="text-success">About</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;