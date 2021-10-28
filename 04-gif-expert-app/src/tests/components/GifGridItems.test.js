import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Test GifGridItme', () => {
    
    const title = 'Title';
    const url = 'http://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('should show corretly the component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should return a paragraph with the text', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('should return an img = props and alt = props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    })

    test('should have animate__fadeIn', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true); 

        //const className = div.prop('className');
        //expect(className.includes('animate__fadeIn')).toBe(true);
        
    })
    
    

})
