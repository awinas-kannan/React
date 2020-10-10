import React from 'react';
import { AddressInfo, OrderInfo, ProductInfo } from './Childs';

export class FlipKart extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            quantity: '',
            address: '',
            product: ''
        }
    }

    onAddressChange = (val) => {
        this.setState({
            address: val
        })
    }

    onQuantityChange = (val) => {
        this.setState({
            quantity: val
        })
    }
    onProductChange = (val) => {
        this.setState({
            product: val
        })
    }

    render() {
        return (
           <React.Fragment>
                <h1>Awinas Kart</h1>
                <ProductInfo quantity={this.state.quantity} changeQuantity={this.onQuantityChange} changeProduct={this.onProductChange}></ProductInfo>
                <AddressInfo address={this.state.address} changeAddress={this.onAddressChange}></AddressInfo>
                <OrderInfo address={this.state.address} product={this.state.product} quantity={this.state.quantity} changeQuantity={this.onQuantityChange} changeAddress={this.onAddressChange}></OrderInfo>
            </React.Fragment>
        )
    }
}