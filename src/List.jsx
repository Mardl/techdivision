import React, { useState, useEffect } from 'react';

export default function List() {
  const [state, setState] = useState('');

  useEffect(() => {
    setState('Klaus');
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  return <div>{state}</div>;
}
