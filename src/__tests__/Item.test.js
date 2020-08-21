import React from 'react';
import {shallow} from 'enzyme';
import Item from '../Item';

describe("<Item /> check", () => {

    let wrapper;
    beforeAll(() => {
        wrapper = shallow(
            <Item
                item={{
                    imgurl: "https://vn-test-11.slatic.net/p/031dbea8b772b54ebaa077c0ac5648c0.jpg",
                    name: "Summer Youth Men's Short-sleeved Shirt Korean Style Slim Fit",
                    price: 120
                }}
            />
        )
    });

    beforeEach(() => {
        wrapper.setState({ show: false });
    });

    test("simulate true click", () => {
        wrapper.find(".showPrice").simulate("click");
        expect(wrapper.find(".itemPrice")).toHaveLength(1);
    });

    test("simulate false click", () => {
        wrapper.setState({ show: true });

        wrapper.find(".showPrice").simulate("click");
        expect(wrapper.find(".itemPrice")).toHaveLength(0);
    });

})