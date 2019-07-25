import { connect } from 'react-redux';
import List from './List';
import { createTodoAction } from './actions';

function mapStateToProps(state) {
  return { todos: state.todos };
}
function mapDispatchToProps(dispatch) {
  return {
    onSubmit(todo) {
      debugger;
      const action = createTodoAction(todo);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
