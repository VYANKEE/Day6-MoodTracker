import React from 'react';

const NoteInput = ({ note, setNote }) => {
  return (
    <div>
      <textarea
        placeholder="Add a short note (optional)..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
};

export default NoteInput;