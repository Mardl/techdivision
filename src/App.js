import React from 'react';
import './App.css';
import List from './List/List';
import BastiSeineComponent from './BastiSeineComponent';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Form from './Form';
import { Provider } from 'react-redux';
import ReduxList from './ReduxList/List.containter';

import configureStore from './configureStore';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <ReduxList />
      {/*<BrowserRouter>*/}
      {/*  <ul>*/}
      {/*    <li>*/}
      {/*      <Link to="/list">Liste</Link>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <Link to="/form">Form</Link>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*  <Switch>*/}
      {/*    <Route path="/" exact component={BastiSeineComponent} />*/}
      {/*    <Route path="/form" component={Form} />*/}
      {/*    <Route path="/list" component={List} />*/}
      {/*    <Route path="/:name/:age" exact component={BastiSeineComponent} />*/}
      {/*  </Switch>*/}
      {/*</BrowserRouter>*/}
    </Provider>
  );
}

export default App;
