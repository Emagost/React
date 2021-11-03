import React from 'react';

const TodoListItems = ({todo, i, handleDelete, handleToggle}) => {
    return (
        
        <li
                key={ todo.id }
                className="list-group-item"
            >
            <p  className={`${ todo.done && 'complete'}`}
                onClick={() =>handleToggle(todo.id)}
            > {i + 1}. {todo.desc} </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </li>
    )
}

export default TodoListItems;
