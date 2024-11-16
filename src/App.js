// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reminders from './pages/Reminders';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [tasks, setTasks] = useState([]);
    const [reminders, setReminders] = useState([]); // State to store reminders

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
                <Route path="/reminders" element={<Reminders tasks={tasks} reminders={reminders} setReminders={setReminders} />} />
                <Route path="/statistics" element={<Statistics tasks={tasks} />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;
