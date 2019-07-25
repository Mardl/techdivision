import React from 'react';
import { withRouter } from 'react-router-dom';

function BastiSeineComponent({ history, match }) {
  const name = match.params.name;
  const age = match.params.age;
  return (
    <div>
      Hallo {name} ({age})
      <button
        onClick={() => {
          debugger;
          history.push('/list');
        }}
      >
        geh zur liste
      </button>
    </div>
  );
}

export default withRouter(BastiSeineComponent);
