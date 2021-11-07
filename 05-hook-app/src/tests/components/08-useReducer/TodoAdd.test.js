import TodoAdd from "../../../components/08-useReducer/TodoAdd";
import {shallow} from "enzyme";

describe('test <TodoAdd/>', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo}/>)
    
    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('shouldnt call handleAddTodo', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} })

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });

    test('should call handleAddTodo',()=>{
        wrapper.find('input').at(0).simulate('change', {
            target: {
                name: 'description',
                value: 'Learn Mongo'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault: ()=>{}});

        expect(handleAddTodo).toHaveBeenCalled();
        expect( handleAddTodo ).toHaveBeenCalledWith(expect.any(Object));
        expect(wrapper.find('input').prop('value')).toBe('')
        
        //No funciona ya que enzyme no esta adaptado para react 17
        // expect( handleAddTodo ).toHaveBeenCalledWith({
        //     id: expect.any(Number),
        //     desc: 'Learn Mongo',
        //     done: false,
        // });
    });
});
