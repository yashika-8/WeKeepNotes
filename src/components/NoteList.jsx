import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onEdit, onDelete }) => (
  <div className="note-list">
    {notes.map(note => (
      <Note key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>
);

export default NoteList;
