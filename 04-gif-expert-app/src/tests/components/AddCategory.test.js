import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test en <AddCategory/>', () => {
    
    const setCategories = () => {};

    test('should show corretly', () => {
        
        const wrapper = shallow(<AddCategory setCategories = {setCategories} />);
        expect(wrapper).toMatchSnapshot();

    })
    

})
