import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";


describe('Test hookApp', () => {
    test('snapshot', () => {
        
        const wrapper = shallow(<HookApp/>);

        expect(wrapper).toMatchSnapshot();

    })
});
