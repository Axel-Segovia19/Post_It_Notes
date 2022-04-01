import { useState } from "react";
import NoteForm from "./NoteForm";

const Note = ({id, title, body, updateNote, deleteNote}) => {
  const [editing, setEdit] = useState(false)


  return (
    <>
      <h1>{title}</h1>
      <h2>{body}</h2>
      {
      editing ?
      <>
        <NoteForm 
        id={id}
        title={title}
        body={body}
        updateNote={updateNote}
        setEdit={setEdit}
      />
      <button onClick={() => setEdit(false)}>Cancel</button>
      </>
      :
      <>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => deleteNote(id)}>Delete</button>
      </>
   }
   </>
  )
}

export default Note;