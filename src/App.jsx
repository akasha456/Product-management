import React, { useState } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import View from './Components/View';
import './App.css';
import Add from './Components/Add';
import { Demoaxios } from './Components/Demoaxios';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <header>
        <h1> Product Management Application</h1>
      </header>
      <main>
      <View />
        <Routes>
          <Route path="/" element={<Demoaxios />} />
          <Route path="/add" element={<Add/>} />
        </Routes>
        
      </main>
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;