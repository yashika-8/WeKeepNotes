import React, { useState } from 'react';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdateNote = () => {
    if (inputText.trim() !== '') {
      if (editId !== null) {
        // Update existing note
        setNotes(
          notes.map((note) =>
            note.id === editId ? { ...note, text: inputText } : note
          )
        );
        setEditId(null);
      } else {
        // Add new note
        const newNote = { id: Date.now(), text: inputText };
        setNotes([...notes, newNote]);
      }
      setInputText(''); // Clear input field after adding/updating
    }
  };

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setInputText(noteToEdit.text);
    setEditId(id); // Set editId to the ID of the note being edited
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (editId === id) {
      setEditId(null); // Reset editId if the note being edited is deleted
      setInputText(''); // Clear input field if the note being edited is deleted
    }
  };

  return (
    <div className="app">
      <h1>Notes App</h1>

      {/* Section for the Note Input Form */}
      <section className="note-input-section">
        <h2>Add a New Note</h2>
        <div className="note-input">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your note..."
          />
          <button onClick={handleAddOrUpdateNote}>
            {editId !== null ? 'Update Note' : 'Add Note'}
          </button>
        </div>
      </section>

      {/* Section for Created Notes */}
      <section className="created-notes-section">
        <h2>Created Notes</h2>
        <NoteList notes={notes} onEdit={handleEditNote} onDelete={handleDeleteNote} />
      </section>
    </div>
  );
};

export default App;
