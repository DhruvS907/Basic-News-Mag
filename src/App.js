import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import { useState } from 'react';

function App() {
  const [category,setCategory] = useState("general");
  return (
    <div className="App">
      <Navbar isDarkMode = "dark" setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  );
}

export default App;
