import React from 'react';
import { Zap, Meh, BatteryLow, Frown } from 'lucide-react';

const options = [
  { label: 'Focused', icon: <Zap size={24} />, id: 'focused' },
  { label: 'Neutral', icon: <Meh size={24} />, id: 'neutral' },
  { label: 'Tired', icon: <BatteryLow size={24} />, id: 'tired' },
  { label: 'Stressed', icon: <Frown size={24} />, id: 'stressed' }
];

const MoodSelector = ({ selectedMood, onSelect }) => {
  return (
    <div>
      <label style={{display:'block', marginBottom:'10px', color:'#aaa'}}>How are you feeling?</label>
      <div className="mood-grid">
        {options.map((option) => (
          <button
            key={option.id}
            className={`mood-btn ${selectedMood === option.id ? 'selected' : ''}`}
            onClick={() => onSelect(option.id)}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;