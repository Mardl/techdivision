import React, { useState } from 'react';
import axios from 'axios';

export default function Form({ onSubmit }) {
  const [value, setValue] = useState('Basti');

  async function handleSubmit(event) {
    event.preventDefault();
    const { data } = await axios.post('http://localhost:3001/todos', {
      title: value,
    });
    onSubmit(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      Wert:
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
