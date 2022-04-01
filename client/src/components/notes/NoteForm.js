import { Form, Button, Card } from 'react-bootstrap'
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
  <Card style={{ width: '18rem'}}>
    <Card.Body>
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3">
    <Form.Label>Title</Form.Label>
    <Form.Control 
    name='title'
    value={note.title}
    onChange={ (e) => setNote({ ...note, title: e.target.value })}
    placeholder='Title'
    required
    />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Note</Form.Label>
    <Form.Control 
    as="textarea" 
    rows={3} 
    name='body'
    value={note.body}
    onChange={ (e) => setNote({ ...note, body: e.target.value })}
    placeholder="Note" 
    required
    />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    <Button variant="success" type="submit">
      Post
    </Button>
  </Form>
  </Card.Body>
  </Card>
  </>
  )
}

export default NoteForm;