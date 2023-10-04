import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
    const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');
  
    const changeBackgroundColor = () => {
      // Generate a random hex color code
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      setBackgroundColor(randomColor);
    };
  
    return (
      <div className="full-page-container" style={{ backgroundColor }}>
        <header>
          <h1>Full Page Website</h1>
        </header>
        <main>
          <p>Welcome to this awesome Color-Changing  website!</p>
          <button onClick={changeBackgroundColor}>Change Background Color</button>
        </main>
        <footer>
          <p>© 2023 Full Page Website. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  

export default App;
