import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';

describe('Test GifExpertApp', () => {
    
    test('snapshot', () => {
        
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();

    });

    test('should return a list of categories', () => {

        const categories = ['The ofice', 'Parasyte'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
        
        expect(wrapper).toMatchSnapshot();
        // expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    })
    
    


})
