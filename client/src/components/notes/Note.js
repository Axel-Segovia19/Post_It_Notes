import { useState } from "react";
import NoteForm from "./NoteForm";
import { Card , Button, Container, Row, Col } from 'react-bootstrap'
const Note = ({id, title, body, updateNote, deleteNote}) => {
  const [editing, setEdit] = useState(false)


  return (
    <>
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
                      <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
                     </>
                   :
                      <Container>
                      <Row >
                        <Col>
                          <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{title} # {id}</Card.Title>
                        <Card.Text>{body}</Card.Text>
                      <>
                      <Button onClick={() => setEdit(true)}>Edit</Button>
                       <Button variant="danger" onClick={() => deleteNote(id)}>Delete</Button>
                   </>
                </Card.Body>
             </Card>
           </Col>
         </Row>
         </Container>
       }
   </>
  )
}

export default Note;