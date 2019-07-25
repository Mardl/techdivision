import React, {useState} from 'react';
import axios from "axios";

export default function Form({onSubmit}) {
    const [value, setValue] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        await axios.post('http://localhost:3001/todos', {
            title: value,
        });
        onSubmit({title: value});
    }

    return (
        <form onSubmit={handleSubmit}>
            Wert:
            <input
                type="text"
                name="name"
                value={value}
                placeholder="new todo entry"
                onChange={e => setValue(e.currentTarget.value)}
            />
            <button type="submit">Speichern</button>
        </form>
    );
}
