import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './navbar'
import Home from './home'
import Studentlist from './Studentlist'
import AddStudent from './addstudent'

function App() {
	
	  
	  const [students, setStudents] = useState([]);
	
	  return (
	    // Router enables page navigation
  	    <BrowserRouter>

	      
	      <Navbar />
	      <Routes>
	        <Route path="/" element={<Home />} />
	
	        
	        <Route path="/students" element={<Studentlist students={students} />} />
	
	        
	        <Route 
	          path="/add" 
	          element={<AddStudent students={students}
	          setStudents={setStudents}/>} />
	      </Routes>
	    </BrowserRouter>
	  );}
	export default App;