import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import AllItem from '../AllItem';
import Cart from '../Cart';

describe("<App /> component tests", () => {
	test("check if all items exists", () => {
		const wrapper = shallow(<App />) //mount App component
		expect(wrapper.find(AllItem)).toHaveLength(1); //look for an AllItem component in App component
		expect(wrapper.find(Cart)).toHaveLength(1);
	});
});

