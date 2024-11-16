// src/pages/Settings.js
import React, { useState } from 'react';
import './Settings.css';

function Settings() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkThemeEnabled, setDarkThemeEnabled] = useState(true);
    const [autoSaveEnabled, setAutoSaveEnabled] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(false);

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="settings-options">
                <div className="setting-item">
                    <label>Enable Notifications</label>
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                    />
                </div>

                <div className="setting-item">
                    <label>Enable Dark Theme</label>
                    <input
                        type="checkbox"
                        checked={darkThemeEnabled}
                        onChange={() => setDarkThemeEnabled(!darkThemeEnabled)}
                    />
                </div>

                <div className="setting-item">
                    <label>Enable Auto-Save</label>
                    <input
                        type="checkbox"
                        checked={autoSaveEnabled}
                        onChange={() => setAutoSaveEnabled(!autoSaveEnabled)}
                    />
                </div>

                <div className="setting-item">
                    <label>Email Notifications</label>
                    <input
                        type="checkbox"
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Settings;
