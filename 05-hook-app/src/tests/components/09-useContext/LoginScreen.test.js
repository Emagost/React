import React from 'react';
import {mount} from 'enzyme';
import UserContext from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

describe('test <LoginScreen/>', () => {

    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    
    );

    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should use setUser function', () => {
        wrapper.find('button').prop('onClick')();
        
        expect(setUser).toHaveBeenCalledWith({
            id:123,
            name:'Emanuel'
        });
    });
});
