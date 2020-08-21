import React, { Component } from 'react';

class Cart extends Component {

    render() {
        return (
            <div>
                <h3>Cart: {this.props.cart.length} </h3>
                
                <button onClick={this.props.clickCart}>Show cart</button>
            </div>
        );
    }
}

export default Cart;