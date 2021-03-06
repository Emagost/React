import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test GifGrid', () => {
    
    const category = 'The Office';
    
    test('snapshot', () => {
        
        useFetchGifs.mockReturnValue({ 
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should show items when useFetchGifs load', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'whatever'
        },
        {
            id: '123',
            url: 'https://google.com',
            title: 'whatever'
        }];

        useFetchGifs.mockReturnValue({ 
            data: gifs,
            loading: false
        })
        const wrapper = shallow( <GifGrid category={ category } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    

})
