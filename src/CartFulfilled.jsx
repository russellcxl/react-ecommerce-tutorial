import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';

class CartFulfilled extends Component {

    render() {

        let uniqueCart = [];

        this.props.cart.forEach(item => {
            if (!uniqueCart.includes(item)) {
                uniqueCart.push(item);
            }
        });

        return (
            <div>
                <div>Cart orders</div>
                <div>
                    {uniqueCart.map(item => {

                        let count = 0;

                        for (let i = 0; i < this.props.cart.length; i++) {
                            if (item === this.props.cart[i]) count++;                            
                        }

                        return (
                            <Col>
                                <Image onClick={() => this.props.removeFromCart(item)} src={item.imgurl} roundedCircle style={{ width: 30 + "%" }} /> x {count}
                            </Col>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CartFulfilled;