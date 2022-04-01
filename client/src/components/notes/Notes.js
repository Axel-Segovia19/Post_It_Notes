import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect( () => {
    axios.get('/api/notes')
    .then ( res => {
      setNotes(res.data)
    })
    .catch( err => console.log(err) )
  }, [])

  const addNote = (note) => {
    axios.post('api/notes', { note })
    .then( res => {
      setNotes([...notes, res.data])
    })
    .catch( err => console.log(err) )
  }
  const updateNote = (id, note) => {
    axios.put(`/api/notes/${id}`, { note })
    .then( res => {
      const updatedNoteNames = notes.map ( n => {
        if (n.id === id) {
          return res.data
        }
        return n
      })
      setNotes(updatedNoteNames)
    })
    .catch( err => console.log(err) )
  }

  const deleteNote = (id) => {
    axios.delete(`/api/notes/${id}`)
    .then( res => {
      setNotes(notes.filter( n => n.id !== id ))
      alert( res.data.message)
    })
  .catch( err => console.log(err) )
  }

  return(
  <>
    <h1>Notes</h1>
    <NoteForm addNote={addNote} />
    <NoteList  
    notes={notes}
    updateNote={updateNote}
    deleteNote={deleteNote}
    />
  </>
  )
}

export default Notes;