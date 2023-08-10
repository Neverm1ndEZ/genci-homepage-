'use client';
import { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto w-3/5">
      <h1 className="text-[#D0CECE] text-sm font-bold mb-2 ">Todo List</h1>
      <hr className="bg-[#202020] h-[2px]" />
      <div className="flex space-x-2 mt-4 mb-4">
        <input
          type="text"
          className="border rounded-xl p-1 flex-grow"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-2 rounded-xl"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 ${
              task.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
      <hr className="bg-[#202020] mt-2 h-[2px]" />
    </div>
  );
}
