import TodoList from "../../../components/08-useReducer/TodoList";
import {shallow} from "enzyme";
import { demoTodos } from "../fixtures/demoTodos";

describe('test <TodoList/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
    <TodoList
        todos = {demoTodos}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
    />)

    test('snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should have two TODOitem', () => {
        
        expect(wrapper.find('TodoListItems').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItems').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItems').at(0).prop('handleToggle')).toEqual(expect.any(Function));

    });
    

});
