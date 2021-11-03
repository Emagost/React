import React from 'react'
import TodoListItems from './TodoListItems';

const TodoList = ({todos,handleDelete, handleToggle}) => {
    return (
                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <TodoListItems
                                    key={todo.id}
                                    todo ={ todo }
                                    i = { i }
                                    handleToggle={ handleToggle }
                                    handleDelete={ handleDelete }
                                />
                            ))
                        }
                    </ul>
    )
}

export default TodoList;
