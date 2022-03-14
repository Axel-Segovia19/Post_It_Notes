
import { useState } from "react";
const NoteForm= ({ addNote }) => {
  const [note, setNote] = useState({ number: 0, title: '', body: ''})

  const handleSubmit = (e) => {


  }
  return(
  <>
    <form onSubmit={handleSubmit}>
      <input
      name='title'
      value={note.title}
      onChange={ (e) => setNote({ ...note, title: e.target.value })}


      />
      <button type="submit">Create</button>
    </form>
  </>
  )
}

export default NoteForm;