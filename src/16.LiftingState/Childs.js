import React from 'react';

export class CustomErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: null
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(err, errInfo) {
        console.log('err ' + err);
        console.log('errInfo ' + errInfo);
    }

    render() {
        if (this.state.hasError) {
            return (

                <div>
                    <b>Error Loading Default Address</b>
                </div>
            );
        } else {
            return this.props.children
        }

    }

}

export class DefaultAddressOfUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //throw new Error('Unabe to Fetch Default Address .. Type your new Address');
        return '4/579 A , Madurai-625009.'
    }

}

export class ProductInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    handleQuantity = (e) => this.props.changeQuantity(e.target.value);
    handleProduct = (e) => this.props.changeProduct(e.target.value);

    render() {
        return (
            <div style={{ border: '2px solid blue' }}>
                <h1>Product Information</h1>
                <p>
                    <label><b>Product </b></label>
                    <select defaultValue={this.props.product} onChange={this.handleProduct}>
                        <option value='Xiaomi 10'>Xiaomi 10</option>
                        <option value='Iphone 11'>Iphone 11</option>
                        <option value='Oneplus 8'>Oneplus 8</option>
                    </select>
                </p>
                <p>
                    <label><b>Quantity </b></label>
                    <input name='quantity' type='text' value={this.props.quantity} onChange={this.handleQuantity}></input>
                </p>
            </div>
        )

    }
}

export class AddressInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    handleAddress = (e) => this.props.changeAddress(e.target.value);

    render() {
        return (
            <div style={{ border: '2px solid blue' }}>
                <h1>Address Information</h1>


                <p>
                    <label><b>Address </b></label>
                    <textarea name='address' value={this.props.address} onChange={this.handleAddress}></textarea>
                </p>
                <p>
                    <label><b>Default Address </b></label>
                    <CustomErrorHandler>
                        <DefaultAddressOfUser />
                    </CustomErrorHandler>
                </p>

            </div>
        )

    }
}

export class OrderInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    handleAddress = (e) => this.props.changeAddress(e.target.value);
    handleQuantity = (e) => this.props.changeQuantity(e.target.value);
    render() {
        return (
            <div style={{ border: '2px solid blue' }}>
                <h1>Order Information</h1>
                <p>
                    <label><b>Product </b></label>
                    <label><b>{this.props.product}</b></label>
                </p>
                <p>
                    <label><b>Address </b></label>
                    <textarea name='address' value={this.props.address} onChange={this.handleAddress}></textarea>
                </p>
                <p>
                    <label><b>Quantity</b></label>
                    <input name='quantity' type='text' value={this.props.quantity} onChange={this.handleQuantity}></input>
                </p>
            </div>
        )

    }
}





