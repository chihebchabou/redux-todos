import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
} from '../actions/types';

const initialState = {
  todos: [],
  current: null,
  filteredTodos: [],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    case TOGGLE_COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        current: payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
