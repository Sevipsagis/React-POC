import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import ProductList from '../../Component/Product/productList';
import { connect } from 'react-redux';
import { productsFetch, productDelete } from '../../actions';

class Product extends Component {

    constructor(props) {
        super(props);
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentDidMount() {
        this.props.productsFetch();
    }

    delProduct(product) {
        this.props.productDelete(product.id);
    }

    editProduct(product) {
        this.props.history.push("/product/edit/" + product.id);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>Products</h1>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success title float-right" onClick={() => this.props.history.push("/product/add")}>Add</button>
                        </div>
                    </div>
                    {this.props.products && Array.isArray(this.props.products) && (
                        <ProductList products={this.props.products} onDelProduct={this.delProduct} onEditProduct={this.editProduct} />
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { products: state.products }
}

export default withRouter(connect(mapStateToProps, { productsFetch, productDelete })(Product));
