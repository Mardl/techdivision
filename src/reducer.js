import React, { useState, useEffect } from 'react';
import update from 'immutability-helper';
import { CREATE_TODO, INIT_TODO } from './ReduxList/actions';
import axios from "axios";

//const initialState = {};
const initialState = {
  "todos": []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INIT_TODO:
      for (let todo of action.payload) {
        state = update(state, { todos: { $push: [todo] } });
      };
      return state;
    case CREATE_TODO:
      return update(state, { todos: { $push: [action.payload] } });
    default:
      return state;
  }
}
