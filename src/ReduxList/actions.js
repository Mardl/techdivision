export const CREATE_TODO = 'CREATE_TODO';
export const INIT_TODO = 'INIT_TODO';

export function createTodoAction(todo) {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
}
export function initTodoAction(todo) {
  return {
    type: INIT_TODO,
    payload: todo,
  };
}
