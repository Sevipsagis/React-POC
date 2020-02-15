import React, { Component } from 'react';
import ProductList from './Product/productList';
import Calculator from './Calculator';
import axios from 'axios';

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = { totalPrice: 0, orders: [], confirm: false, message: "" }
        this.addOrder = this.addOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id === product.id);
        if (findOrder) {
            findOrder.quantity++;
        }
        else {
            this.state.orders.push({ product: product, quantity: 1 });
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice, 10);
        this.setState({ totalPrice: totalPrice, orders: this.state.orders, confirm: false });
    }

    deleteOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id === product.id);
        let resultOrder = this.state.orders.filter(order => order.product.id !== product.id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice, 10));
        this.setState({ totalPrice: totalPrice, orders: resultOrder, confirm: false });
    }

    confirmOrder() {
        const { totalPrice, orders } = this.state;
        if (orders && orders.length > 0) {
            axios.post("http://localhost:3001/orders", { orderedDate: new Date(), totalPrice, orders })
                .then(res => this.setState({ totalPrice: 0, orders: [], confirm: true, msg: "Your orders have been saved" }))
        }
        else {
            this.setState({ totalPrice: 0, orders: [], confirm: true, msg: "Please add item to cart" })
        }
    }

    cancelOrder() {
        this.setState({ totalPrice: 0, orders: [], confirm: false });
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.confirm &&
                    <div className="alert alert-secondary title text-right" role="alert">
                        {this.state.msg}
                    </div>
                }
                <div className="row">
                    <div className="col-md-9">
                        {this.props.products && Array.isArray(this.props.products) && (
                            <ProductList products={this.props.products} onAddOrder={this.addOrder} onDelProduct={this.delProduct} onEditProduct={this.editProduct} />
                        )}
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDeleteOrder={this.deleteOrder} onConfirmOrder={this.confirmOrder} onCancelOrder={this.cancelOrder} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Monitor;