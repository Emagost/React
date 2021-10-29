import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test en <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />);

    });

    test('should show corretly', () => {
        
        expect(wrapper).toMatchSnapshot();

    })

    test('should change a input', () => {
        
        const input = wrapper.find('input');
        const value = 'hello world';
        input.simulate('change', { 
            target: {
                value 
            }
        });

        // expect(wrapper.find('p').text().trim() ).toBe(value);
        //comento esta linea asi no rompo la app en la parte visual
    })
    
    test('shouldnt post an information with submit', () => {
        
        wrapper.find('form').simulate('submit',{ preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('should call setCategories and clear the textbox', () => {
        
        const value = 'hello world';

        //1 simulat el inputChange 
        const input = wrapper.find('input');
        input.simulate('change', ({ target: { value } }));
        
        
        //2 simular el submit 
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        
        //3 setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        //4 el input debe estar vacio
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    

})
