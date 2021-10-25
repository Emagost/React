import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../components/GifGridItem';


describe('Test GifGridItme', () => {
    test('should show corretly the component', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
