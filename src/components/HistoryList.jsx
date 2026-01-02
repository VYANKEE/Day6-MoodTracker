import React from 'react';
import { Zap, Meh, BatteryLow, Frown } from 'lucide-react';

// Helper to get icon based on ID
const getIcon = (id) => {
  switch(id) {
    case 'focused': return <Zap size={20} color="#10b981" />;
    case 'neutral': return <Meh size={20} color="#60a5fa" />;
    case 'tired': return <BatteryLow size={20} color="#f59e0b" />;
    case 'stressed': return <Frown size={20} color="#ef4444" />;
    default: return <Meh size={20} />;
  }
};

const HistoryList = ({ logs }) => {
  if (logs.length === 0) {
    return <div style={{textAlign:'center', color:'#555', padding:'20px'}}>No logs yet. Start today!</div>;
  }

  return (
    <div className="card">
      <h3 style={{marginBottom:'15px', fontSize:'1.1rem'}}>Recent History</h3>
      <div>
        {logs.map((log, index) => (
          <div key={index} className="history-item">
            <div className="mood-icon">{getIcon(log.mood)}</div>
            <div>
              <span className="date">{log.date}</span>
              <p style={{fontSize:'0.95rem'}}>{log.note || "No note added."}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;