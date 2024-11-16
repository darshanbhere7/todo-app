import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Home.css';

function Home({ tasks, setTasks }) {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleAddTask = () => {
        if (!task || !date || !time) {
            Swal.fire('Please fill in all fields!');
            return;
        }

        const taskExists = tasks.some(t => t.title === task && t.date === date && t.time === time); // changed `task` to `title`
        if (taskExists) {
            Swal.fire('This task already exists!');
            return;
        }

        const newTask = {
            title: task,  // changed `task` to `title`
            date,
            time,
            priority,
            completed: false,
            id: Date.now()
        };

        setTasks([...tasks, newTask]);
        setTask('');
        setDate('');
        setTime('');
        setPriority('Low');
        Swal.fire('Task added successfully!');
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        Swal.fire('Task deleted successfully!');
    };

    const handleEditTask = (id) => {
        const taskToEdit = tasks.find(task => task.id === id);
        setTask(taskToEdit.title);  // changed `task` to `title`
        setDate(taskToEdit.date);
        setTime(taskToEdit.time);
        setPriority(taskToEdit.priority);

        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleToggleComplete = (id) => {
        const updatedTasks = tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="home-container">
            <h1>To-Do List</h1>
            <div className="task-form">
                <input
                    type="text"
                    placeholder="Task Name"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="task-list">
                {tasks.length === 0 ? (
                    <p>No tasks available!</p>
                ) : (
                    tasks.map(task => (
                        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                            <div className="task-details">
                                <h3>{task.title}</h3>  {/* changed `task.task` to `task.title` */}
                                <p>{task.date} {task.time}</p>
                                <p className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</p>
                            </div>
                            <div className="task-actions">
                                <button onClick={() => handleEditTask(task.id)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                                <button onClick={() => handleToggleComplete(task.id)}>
                                    {task.completed ? 'Undo' : 'Mark as Completed'}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;
