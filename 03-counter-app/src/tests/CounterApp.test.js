import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import CounterApp from "../comp/CounterApp";



describe('Test counterApp', () => {

    let wrapper = shallow(<CounterApp/>);
    
    beforeEach(() => {
        
        wrapper = shallow(<CounterApp/>);
    })

    test('should show the <CounterApp/> correctly', () => {
        
        expect(wrapper).toMatchSnapshot();

    })

    test('should show the number 100 send by props ', () => {

        const wrapper = shallow(<CounterApp value={100} />);

        const number = wrapper.find('h2').text().trim();

        expect(number).toBe('100');
        
    })
    
    test('should be incremented when touch the button +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        
        const text = wrapper.find('h2').text().trim();

        expect(text).toBe('11');

    })
    
    test('should be decrease when touch the button -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
    
        const text = wrapper.find('h2').text().trim();


        expect(text).toBe('9');

    })

    test('should return default value when touch the button "Reset"', () => {

        const wrapper = shallow(<CounterApp value={105} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');    
        const text = wrapper.find('h2').text().trim();

        expect(text).toBe('105');



    })
    

})
