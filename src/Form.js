import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [value, setValue] = useState('Basti');

  async function handleSubmit(event) {
    event.preventDefault();
    const newValue = await axios.post('http://localhost:3001/todos', {
      title: value,
    });
    console.log(newValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      Wert:{' '}
      <input
        type="text"
        name="name"
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
      />
      <button type="submit">Speichern</button>
    </form>
  );
}
