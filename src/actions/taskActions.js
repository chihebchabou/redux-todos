import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
} from './types';

export const addTask = payload => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const editTask = payload => {
  return {
    type: EDIT_TASK,
    payload,
  };
};
export const deleteTask = payload => {
  return {
    type: DELETE_TASK,
    payload,
  };
};
export const setCurrentTask = payload => {
  return {
    type: SET_CURRENT_TASK,
    payload,
  };
};
export const filterTasks = () => {};
export const toggleCompletedTask = payload => {
  return {
    type: TOGGLE_COMPLETED_TASK,
    payload,
  };
};
