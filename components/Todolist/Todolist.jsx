import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDate, setTaskDate] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '' && taskDate) {
      setTasks([...tasks, { text: newTask, date: taskDate, completed: false }]);
      setNewTask('');
      setTaskDate(null);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-gray-900 text-white mx-auto w-3/5 p-6 mt-20 rounded-lg shadow-md">
      <h1 className="text-gray-50 text-xl font-bold mb-4">Todo List</h1>
      <hr className="bg-gray-700 h-[1px]" />
      <div className="flex space-x-4 mt-6 mb-6">
        <input
          type="text"
          className="border rounded-xl py-2 px-3 flex-grow bg-gray-800 text-white"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <DatePicker
          selected={taskDate}
          onChange={(date) => setTaskDate(date)}
          dateFormat="dd/MM/yyyy"
          className="border rounded-xl py-2 px-3 bg-gray-800 text-white"
          placeholderText="Select Date"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
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
              className="form-checkbox text-blue-500 h-5 w-5"
            />
            <span className="text-white">{task.text}</span>
            {task.date && (
              <span className="text-sm text-gray-400 ml-2">
                {task.date.toLocaleDateString()}
              </span>
            )}
            <button
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-auto"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr className="bg-gray-700 mt-4 h-[1px]" />
    </div>
  );
}
