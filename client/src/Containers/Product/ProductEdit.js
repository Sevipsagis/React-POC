import React, { Component } from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import ProductForm from '../../Component/Product/productForm';
import { connect } from 'react-redux';
import { productFetch, productCreate, productUpdate } from '../../actions'

class ProductEdit extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);
        }
    }

    render() {
        const { formValues, match, products, productCreate, productUpdate } = this.props;
        return (
            <div>
                <Header />
                <div className="container col-md-5">
                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>Add Product</h2>
                            {products.saved && (
                                <div className="alert alert-success title" role="alert">
                                    {products.msg}
                                </div>
                            )}
                            <ProductForm onProductSubmit={() => productCreate(formValues)} />
                        </div>
                    )}
                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>Edit Product</h2>
                            {products.saved && (
                                <div className="alert alert-success title" role="alert">
                                    {products.msg}
                                </div>
                            )}
                            <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({ form, products }) {
    return { formValues: form.productForm ? form.productForm.values : null, products }
}

export default connect(mapStateToProps, { productFetch, productCreate, productUpdate })(ProductEdit);