import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from './components/notes/NoteForm';

const App = () => {
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


  }

  const deleteNote = (id) => {

  }

  return(
  <>
    <h1>Notes</h1>
    <NoteForm addNote={addNote} />
  </>
  )
}
export default App;
