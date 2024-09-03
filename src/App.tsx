import './App.css'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import CreateChallenge from './pages/CreateChallenge'
import NotFound from './pages/NotFound';
import EditChallenge from './pages/EditChallenge';
import DetailPage from './components/DetailPage';

function App() {
  return (
      <Router>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-hackathon" element={<CreateChallenge />} />
        <Route path="/edit-hackathon" element={<EditChallenge />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
      
  )
}

export default App
