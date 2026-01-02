import React, { useState, useEffect } from 'react';
import './styles/globals.css';
import './styles/mood.css';

import MoodSelector from './components/MoodSelector';
import NoteInput from './components/NoteInput';
import HistoryList from './components/HistoryList';

function App() {
  // 1. Get Today's Date String (e.g., "Fri Jan 02 2026")
  // Isse hum check karenge ki aaj ka entry hai ya nahi
  const todayDate = new Date().toDateString();

  // 2. Load logs from LocalStorage
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem('dailyMoodLogs');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentMood, setCurrentMood] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3. Check if already submitted today
  useEffect(() => {
    // Check karo agar 'logs' array mein koi item hai jiski date == todayDate hai
    const alreadyLogged = logs.some(log => log.date === todayDate);
    setIsSubmitted(alreadyLogged);
  }, [logs, todayDate]);

  // 4. Save to LocalStorage whenever logs change
  useEffect(() => {
    localStorage.setItem('dailyMoodLogs', JSON.stringify(logs));
  }, [logs]);

  const handleSave = () => {
    if (!currentMood) return alert("Please select a mood!");

    const newEntry = {
      id: Date.now(),
      date: todayDate,
      mood: currentMood,
      note: note
    };

    // Naya log sabse upar (beginning) mein add karo
    setLogs([newEntry, ...logs]);
    
    // Reset form fields
    setCurrentMood('');
    setNote('');
  };

  return (
    <div className="container">
      <h1>Daily Check-in</h1>
      <p className="subtitle">{todayDate}</p>

      {/* Logic: Agar aaj submit kar diya, toh 'Done' dikhao, warna Form */}
      {isSubmitted ? (
        <div className="card" style={{textAlign:'center', padding:'40px'}}>
          <h2 style={{fontSize:'2rem', marginBottom:'10px'}}>🎉</h2>
          <h3>You're all set for today!</h3>
          <p style={{color:'var(--text-muted)', marginTop:'5px'}}>Come back tomorrow.</p>
        </div>
      ) : (
        <div className="card">
          <MoodSelector selectedMood={currentMood} onSelect={setCurrentMood} />
          <NoteInput note={note} setNote={setNote} />
          <button 
            className="save-btn" 
            onClick={handleSave}
            disabled={!currentMood}
          >
            Save Entry
          </button>
        </div>
      )}

      {/* History Section */}
      <HistoryList logs={logs} />
    </div>
  );
}

export default App;