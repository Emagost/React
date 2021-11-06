import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import {shallow} from 'enzyme';

describe('test <RealExampleRef/>', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('should show a component <MultipleCustomHook/>', () => {
    
        const button = wrapper.find('button');
        button.simulate('click');
        
        expect( wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});
