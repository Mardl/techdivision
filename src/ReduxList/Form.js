import React, { useState } from 'react';

export default function Form({ onSubmit }) {
  const [value, setValue] = useState('Basti');

  async function handleSubmit(event) {
    debugger;
    event.preventDefault();
    onSubmit({ title: value });
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
