
import { useState, useEffect } from "react";
const NoteForm = ({ addNote, id, title, body, updateNote, setEdit }) => {
  const [note, setNote] = useState({ title: '', body: ''})

    useEffect( () => {
      if (id) {
        setNote({ title, body })
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
    setNote({ title: '', body: ''})

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