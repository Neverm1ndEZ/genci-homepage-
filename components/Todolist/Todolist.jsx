import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDate, setTaskDate] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '' && taskDate) {
      setTasks([...tasks, { text: newTask, date: taskDate }]);
      setNewTask('');
      setTaskDate(null);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="bg-gray-900 text-white mx-auto w-3/5 p-6 mt-20 rounded-lg shadow-md">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-gray-50 text-2xl font-bold">Todo List</h1>
          <div className="flex gap-4 items-center my-4">
            <TextField
              type="text"
              variant="outlined"
              className="bg-white rounded-md w-32"
              placeholder="New Task.."
              value={newTask}
              size="small"
              onChange={(e) => setNewTask(e.target.value)}
            />
            <DatePicker
              className="bg-white rounded-md text-gray-500 w-40"
              value={taskDate}
              onChange={(newValue) => setTaskDate(newValue)}
              slotProps={{ textField: { size: 'small' } }}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" size="small" />
              )}
              placeholder="Select Date"
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={addTask}
            >
              Add
            </Button>
          </div>
        </div>

        <hr className="bg-gray-700 h-[1px]" />

        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center py-3 px-2 justify-between w-full  ${
                task.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              <div
                className='flex items-center text-base text-gray-300 w-3/5'
              >
                {task.text}
              </div>
              {task.date && (
                <span className="text-sm text-gray-400 ml-2">
                  {format(task.date, 'dd/MM/yyyy')}
                </span>
              )}
              <button
                className="hover:text-red-400 transition-all duration-300 grid place-content-center p-1 aspect-square rounded-full"
                onClick={() => deleteTask(index)}
              >
                <span className="material-symbols-outlined w-full">delete</span>
              </button>
            </li>
          ))}
        </ul>
        <hr className="bg-gray-700  h-[1px]" />
      </div>
    </LocalizationProvider>
  );
}
