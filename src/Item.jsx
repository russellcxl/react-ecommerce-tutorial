import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

export default class Item extends Component {
    state = {
        show: false,
    };

    showPriceInformation = () => {
        this.setState({ show: !this.state.show });
        // this.setState(prevState => ({show : !prevState.show}))
    };

    render() {

        return (
            <Col md="4" className="mb-3">
                <Card>
                    <Card.Img variant="top" src={this.props.item.imgurl}/>
                        <Card.Body>
                            <Card.Subtitle>{this.props.item.name}</Card.Subtitle>
                            
                            <button onClick={() => this.props.addToCart(this.props.item)} className="showPrice">
                                Add to cart
                            </button>

                            <div className="itemPrice">Price: ${this.props.item.price}</div>
                            <div>Qty: {this.props.item.quantity}</div>
                        </Card.Body>
                </Card>
            </Col>
        );
    }
}