import React from 'react';

const Note = ({ note, onEdit, onDelete }) => (
  <div className="note">
    <p>{note.text}</p>
    <div className="note-actions">
      <button onClick={() => onEdit(note.id)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  </div>
);

export default Note;
