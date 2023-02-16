import React, { useState } from 'react';
// Just a comment to add something for commit
const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    value && addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="input-box"
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={(e) => setValue(e.target.value)}
      />
      <button data-testid="submit-btn" type="submit">
        +
      </button>
    </form>
  );
};

export default AddTaskForm;
