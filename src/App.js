import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import './style.css';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import Form from './components/Form';

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  // props diambil dari index js data

  function toggleTaskCompleted(id) {
    console.log(task[0]);
  }

  // const taskList = props.tasks.map((task) => task.name);
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ));

  // menagkap isi props dari form.js
  function addTask(name) {
    // alert(name);
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      {/* awal dari form */}
      <Form taskTambahan={addTask} />
      {/* akhir dari form */}

      {/* awal dari Check list TODO */}
      <FilterButton />
      <FilterButton />
      <FilterButton />
      {/* akhir dari checklist TODO */}
      <h2 id="list-heading">{headingText}</h2>
      {/* awal dari list TODO */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      {/* akhir dari list Task TODO */}
    </div>
  );
}
