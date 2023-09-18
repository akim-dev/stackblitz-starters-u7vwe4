import React, { useState } from 'react';

function Form({ taskTambahan }) {
  const [name, setName] = useState('eaat');

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('Test');
    // props.taskTambahan('say Hello');
    taskTambahan(name);
    setName('');
  }

  // menangkap perubahan user input
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
