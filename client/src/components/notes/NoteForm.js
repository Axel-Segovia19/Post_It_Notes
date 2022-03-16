
import { useState, useEffect } from "react";
const NoteForm = ({ addNote, id, title, body, number, updateNote, setEdit }) => {
  const [note, setNote] = useState({ number: 0, title: '', body: ''})

    useEffect( () => {
      if (id) {
        setNote({ title, number, body })
      }
    }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(id, note)
      setEdit(false)
    } else {
      addNote(note)
    }
    setNote({ number: 0, title: '', body: ''})

  }
  return(
  <>
    <form onSubmit={handleSubmit}>
      <input
      name='title'
      value={note.title}
      onChange={ (e) => setNote({ ...note, title: e.target.value })}

      placeholder='Title'
      required
      />
       <input 
        type="number"
        value={note.number}
        size='2'
        onChange={ (e) => setNote({ ...note, number: e.target.value })}
        required
      />
      <textarea
      name='body'
      value={note.body}
      onChange={ (e) => setNote({ ...note, body: e.target.value })}

      placeholder='Message'
      required
      />
      <button type="submit">Post</button>
    </form>
  </>
  )
}

export default NoteForm;