import React, { useState } from 'react';
import { addTask } from '../../actions/taskActions';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (text) {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        description: text,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setText('');
    }
  };
  return (
    <div>
      <div className="input-group mb-2">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className="form-control"
        />
        <button className="btn btn-primary" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <input type="radio" name="task" value="all" id="all" />
          <label className="form-label" htmlFor="all">
            All
          </label>
        </div>
        <div>
          <input type="radio" name="task" value="completed" id="completed" />
          <label className="form-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="uncompleted"
            id="uncompleted"
          />
          <label className="form-label" htmlFor="uncompleted">
            Uncompleted
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
