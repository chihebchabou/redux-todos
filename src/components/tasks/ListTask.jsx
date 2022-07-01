import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const ListTask = () => {
  const todos = useSelector(state => state.todos);
  console.log(todos);
  return (
    <ul className="list-group mt-3">
      {todos.map(todo => (
        <Task todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default ListTask;
