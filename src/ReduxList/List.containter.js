import { connect } from 'react-redux';
import List from './List';
import { createTodoAction, initTodoAction } from './actions';

function mapStateToProps(state) {
  return { todos: state.todos };
}
function mapDispatchToProps(dispatch) {
  return {
    onInit(todo) {
      const action = initTodoAction(todo);
      dispatch(action);
    },
    onSubmit(todo) {
      const action = createTodoAction(todo);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
