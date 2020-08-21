import React from 'react';
import {shallow} from 'enzyme';
import AllItem from '../AllItem';
import App from '../App';
import Item from '../Item';

describe("<AllItem /> component tests", () => {

    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<AllItem />);
    });

    test("state returns correct items", () => {
        wrapper.setState({ items: [{}, {}, {}] }); //set arbitrary state
        expect(wrapper.find(Item)).toHaveLength(3); //test if length === state count
    });
})