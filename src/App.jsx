import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import{Home, About, Project, Contact} from './pages';
import Navbar from './Components/Navbar'

const App = () => {
  return (
  <main className="bg-slate-300/20">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  </main>
  )
}

export default App
