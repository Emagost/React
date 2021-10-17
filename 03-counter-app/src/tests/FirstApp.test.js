import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import FirstApp from '../comp/FirstApp';

describe('First test <FirstApp />', () => {
    
    // test('should show the msg "Hello Emanuel"', () => {
    //     const hello = 'Hello Emanuel';
    //     const { getByText } = render( <FirstApp hello= { hello }/>);
    //     expect(getByText(hello)).toBeInTheDocument();
    // })

    test('should show the <FirstApp/> correctly', () => {
        
        const hello = 'Hello Emanuel';
        const wrapper = shallow(<FirstApp saludo={hello}/>);
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show the subtitle send by props', () => {

        const hello = 'Hello, Emanuel';
        const subtitle = 'Hello, I am subtitle';
        const wrapper = shallow(
            <FirstApp 
                saludo={hello}
                subtitle={subtitle}
            />
        );
        
            const text = wrapper.find('p').text();

            // console.log(subtitle);
            // console.log(text);

            expect (text).toBe (subtitle);

    })
    
    

})
