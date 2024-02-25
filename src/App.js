import React, { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleAddNote = (text) => {
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: text,
      date: new Date().toLocaleDateString(),
      color: getRandomColor() // Generate random color for each note
    };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchNote = (text) => {
    setSearchText(text);
  };

  const filteredNotes = notes.filter(note =>
    typeof note.text === 'string' && note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header handleToggleDarkMode={handleToggleDarkMode} />
      <Search handleSearchNote={handleSearchNote} />
      <div className="container">
        <NotesList
          notes={filteredNotes}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
