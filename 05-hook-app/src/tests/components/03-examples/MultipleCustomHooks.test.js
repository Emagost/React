import { shallow } from 'enzyme';
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import useCounter from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('test <MultipleCustomHooks/>', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });
    });

    test('snapshot', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a information', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author:'Emanuel',
                quote:'Hi!'
            }],
            loading: false,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hi!');
        expect(wrapper.find('footer').text().trim()).toBe('Emanuel');
        
    }); 
});
