import React, { useEffect }  from 'react';
import Form from './Form';
import ListItem from './ListItem';
import axios from "axios";

export default function List({todos, onSubmit, onInit}) {

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:3001/todos');
            onInit(data);
        })();
    }, []);

    function initTodos(todos) {
        if (!todos) {
            return '';
        }
        return todos.map(todo => (
            <ListItem key={todo.id} todo={todo}/>
        ));
    }

    return (
        <>
            <h1>I am from redux</h1>
            <Form onSubmit={onSubmit}/>
            <ul>
                {initTodos(todos)}
            </ul>
            <hr/>
        </>
    );
}
