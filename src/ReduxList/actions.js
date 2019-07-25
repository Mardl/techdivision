export const CREATE_TODO = 'CREATE_TODO';

export function createTodoAction(todo) {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
}
