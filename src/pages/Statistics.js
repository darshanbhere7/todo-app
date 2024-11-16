import React from 'react';
import './Statistics.css';

const Statistics = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    return (
        <div className="statistics">
            <h2>Task Statistics</h2>
            <div className="stats">
                <div className="stat-item">
                    <h3>Total Tasks</h3>
                    <p>{totalTasks}</p>
                </div>
                <div className="stat-item">
                    <h3>Completed Tasks</h3>
                    <p>{completedTasks}</p>
                </div>
                <div className="stat-item">
                    <h3>Pending Tasks</h3>
                    <p>{pendingTasks}</p>
                </div>
            </div>

            <h3>Details of All Tasks</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : 'pending'}>
                        {/* Displaying task title, date, and time */}
                        <strong>{task.title}</strong> - {task.date} at {task.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Statistics;
