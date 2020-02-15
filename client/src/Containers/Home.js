import React, { Component } from 'react';
// import './Home.css';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Monitor from '../Component/Monitor';
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component {

  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="Sevipsagis" email="sevipsagis@gmail.com" />
      </div>
    );
  }
}

function mapStateToProp(state) {
  return { products: state.products }
}

export default connect(mapStateToProp, { productsFetch })(Home);
