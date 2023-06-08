import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' )  ) || []
}

export const useTodo = ( initialTodos = [] ) => {     
    
    const [ todos, dispatchTodo ] = useReducer( todoReducer , initialTodos, init );

    useEffect(() => {
        // A grabar en el local storage
        localStorage.setItem( 'todos', JSON.stringify( todos ) || [] ); 
      
    }, [todos])    

    const addTodo = ( todo ) => {      
        
        if ( todos.findIndex( t => t.description === todo.description ) > -1 )
        {
            alert('Elemento duplicado, no lo insertaremos :)');
            return;        
        }
        
        const action = {
            type: '[TODO] Add',
            payload: todo,
        }

        dispatchTodo( action );
    }

    const deleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Delete',
            payload: id,
        }

        dispatchTodo( action );
    }

    const completeTodo = ( id ) => {
        const action = {
            type: '[TODO] Complete',
            payload: id,
        }

        dispatchTodo( action );
    }    
    
    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter( t => !t.done ).length,
        addTodo,
        deleteTodo,
        completeTodo,
    }
}