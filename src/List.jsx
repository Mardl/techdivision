import React from 'react';

export default class List extends React.Component {
  render() {
    const data = 'Hallo Welt';
    // arr.map(v => <div>v</div>);

    return <div>{data.toUpperCase()}</div>;
  }
}
