import React, { Component } from "react";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";
import Cart from './Cart';
import CartFulfilled from './CartFulfilled';

class AllItem extends Component {
    state = {
        items: [
            {
                imgurl:
                    "https://vn-test-11.slatic.net/p/031dbea8b772b54ebaa077c0ac5648c0.jpg",
                name: "Summer Youth Men's Short-sleeved Shirt Korean Style Slim Fit",
                price: 120,
                quantity: 3
            },
            {
                imgurl:
                    "https://my-test-11.slatic.net/p/48977eba66358d5ab0c900fe8460a66d.jpg",
                name: "FAVCENT shirt",
                price: 300,
                quantity: 3
            },
            {
                imgurl:
                    "https://my-test-11.slatic.net/p/37809e2652e1bed581f7bdc5348b4406.jpg",
                name: "LA mens Dogdes",
                price: 110,
                quantity: 3
            },
            {
                imgurl:
                    "https://sg-test-11.slatic.net/p/d3146d26a38cb4a1b90c6cb940c5daaf.jpg",
                name: "Face Mask High Quality",
                price: 50,
                quantity: 3
            },
            {
                imgurl:
                    "https://sg-test-11.slatic.net/p/f1d465126512403dc502971ed59d8e7f.jpg",
                name: "face protection",
                price: 30,
                quantity: 3
            },
            {
                imgurl:
                    "https://my-test-11.slatic.net/p/245795d2888a0d08bf5a00af4ee60ff7.jpg",
                name: "jersey",
                price: 300,
                quantity: 3
            }
        ],
        cart: [],
        showCart: false,

    };

    addToCart = (item) => {
        let index = this.state.items.indexOf(item);
        

        if (this.state.items[index].quantity < 1) {
            alert(`${item.name} is out of stock`);
        }

        else {
            let temp = {...this.state};
            temp.cart.push(item);
            temp.items[index].quantity--;
            this.setState(temp);
        }        
    }

    //cart toggle button
    clickCart = () => {
        this.setState(() => ({ showCart: !this.state.showCart }));
    }

    removeFromCart = (item) => {
        let indexInCart = this.state.cart.indexOf(item);
        let indexInList = this.state.items.indexOf(item);

        let temp = {...this.state};
        temp.items[indexInList].quantity++;
        temp.cart.splice(indexInCart, 1);
        this.setState(temp);
    }

    render() { 
        
        let itemList = this.state.items.map((item, i) => {
            return (
                <Item 
                    addToCart={this.addToCart}
                    item={item} 
                    id={i} 
                    key={i} 
                />
            );
        });

        return (
            <div class="AllItem">

                <Cart cart={this.state.cart} clickCart={this.clickCart} />

                <Container>
                    {!this.state.showCart ? 
                        <Row>{itemList}</Row>
                        :
                        <Row>
                            <Col md="3">
                                <CartFulfilled cart={this.state.cart} removeFromCart={this.removeFromCart}/>
                            </Col>

                            <Col md="9">
                                <Row>
                                    {itemList}
                                </Row>
                            </Col>
                            
                        </Row>
                    }
                    
                </Container>
            </div>
        );
    }
}

export default AllItem;