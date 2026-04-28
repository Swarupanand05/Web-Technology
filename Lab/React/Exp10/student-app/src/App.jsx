import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Studentlist from './Studentlist'

function App() {
  const [count, setCount] = useState(0)

  const students = [
    {name:'Swarup',age: 22, course: '.Net'},
    {name:'Aditya',age: 22, course: 'MERN'},
    {name:'Atharva',age: 22, course: 'GenAI'},
    {name:'Om',age: 22, course: 'CyberSecurity'},
    {name:'Shivtej',age: 22, course: 'DataScience'},
    {name:'Ram',age: 22, course: 'MachineLearning'},
    {name:'Sham',age: 22, course: 'CloudComputing'},
    {name:'Swarupanand',age: 22, course: 'AI'},
    {name:'Omkar',age: 22, course: 'Python'},
    {name:'Arth',age: 22, course: 'Java'},
  ];

  const showMessage = () => {
    alert("Button Clicked!");
  };
  return (
    <>
    <h1>Student List  </h1>
    <button onClick={showMessage}>Click Me</button>
    <Studentlist students={students} />
    </>
  );
}

export default App
