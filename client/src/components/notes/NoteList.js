import Note from './Note';
const NoteList = ({ notes, updateNote, deleteNote}) => (

  <>
    { notes.map( n => 
    <Note 
    key={n.id} 
    {...n} 
    updateNote={updateNote} 
    deleteNote={deleteNote}
    /> )}
  </>

)

export default NoteList;