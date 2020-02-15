import React, { Component } from 'react';
class Calculator extends Component {

    showOrder(orders) {
        if (orders.length > 0) {
            return orders.map(order => {
                return (
                    <li key="order.id" className="text-right text-success title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-sm btn-light" onClick={() => this.props.onDeleteOrder(order.product)}> X </button>
                    </li>
                )
            })
        }
        else return <li className="text-right text-muted title">No item in cart.</li>

    }

    render() {

        const { totalPrice, orders } = this.props;

        return (
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showOrder(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()}>Confirm</button>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onCancelOrder()}>Cancel</button>
            </div>
        )

    }
}

export default Calculator;