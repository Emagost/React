import { render } from  '@testing-library/react';
import React from 'react';
import FirstApp from '../comp/FirstApp';

describe('First test <FirstApp />', () => {
    
    test('should show the msg "Hello Emanuel"', () => {
        
        const hello = 'Hello Emanuel';

        const { getByText } = render( <FirstApp hello= { hello }/>);

        expect(getByText(hello)).toBeInTheDocument();

    })
    

})
