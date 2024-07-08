import About from './components/About';
import ContactForm from './components/Contactform';
import Gallery from './components/Gallery';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<About/>}/>
        <Route path ="/contact" element={<ContactForm/>}/>
        <Route path ="/gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
