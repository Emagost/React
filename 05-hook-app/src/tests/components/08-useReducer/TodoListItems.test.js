import TodoListItems from "../../../components/08-useReducer/TodoListItems";
import { demoTodos } from "../fixtures/demoTodos";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('test <TodoListItems/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
    <TodoListItems
        todo = {demoTodos[0]}
        i = {0}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
    />)

    test('snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should call function handleDelete', () => {

        wrapper.find('button').simulate('click');

        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('should call function handleToggle', () => {
        wrapper.find('p').simulate('click');

        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('should show text correctly', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);

    });

    test('should have the className complete if TODO.done == true', () => {

        const todo = demoTodos[0];
        todo.done = true
        
        const wrapper = shallow( 
            <TodoListItems
                todo = {todo}
            />)

            expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
});
