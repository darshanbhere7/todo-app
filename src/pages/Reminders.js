// src/pages/Reminders.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Reminder.css';

function Reminders({ tasks, reminders, setReminders }) {
    const [reminderTaskId, setReminderTaskId] = useState('');

    const handleSetReminder = () => {
        if (!reminderTaskId) {
            Swal.fire('Please select a task to set a reminder!');
            return;
        }

        const selectedTask = tasks.find(task => task.id === parseInt(reminderTaskId));

        if (!selectedTask) {
            Swal.fire('Selected task does not exist!');
            return;
        }

        // Create a new reminder object
        const newReminder = {
            title: selectedTask.title,  // Accessing title instead of task
            date: selectedTask.date,
            time: selectedTask.time,
            reminderTime: selectedTask.time,
            completed: false,
        };

        setReminders(prevReminders => [...prevReminders, newReminder]);

        Swal.fire(`Reminder set for task: ${selectedTask.title} on ${selectedTask.date} at ${selectedTask.time}`);
        setReminderTaskId(''); 
    };

    return (
        <div className="reminder-container">
            <h2>Set a Reminder</h2>
            <div className="reminder-form">
                <select
                    value={reminderTaskId}
                    onChange={(e) => setReminderTaskId(e.target.value)}
                >
                    <option value="">Select Task</option>
                    {tasks.map(task => (
                        <option key={task.id} value={task.id}>
                            {task.title} - {task.date} at {task.time}
                        </option>
                    ))}
                </select>
                <button onClick={handleSetReminder}>Set Reminder</button>
            </div>

            <h3>Reminders</h3>
            <ul>
                {reminders.length === 0 ? (
                    <p>No reminders set yet!</p>
                ) : (
                    reminders.map((reminder, index) => (
                        <li key={index}>
                            <strong>{reminder.title}</strong> - {reminder.date} at {reminder.time}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Reminders;
