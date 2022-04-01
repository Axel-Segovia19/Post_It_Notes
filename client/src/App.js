import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Notes from './components/notes/Notes';
import Nomatch from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Note from './components/notes/Note';
const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/notes/:noteId' element={<Note />} />
      <Route path='*' element={<Nomatch />} />
    </Routes> 
  </>
)

export default App;