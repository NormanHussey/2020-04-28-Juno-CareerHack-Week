import React, { useState } from 'react';
import './App.css';

import Input from './Components/Input';

function App() {
  const [input, setInput] = useState('');
  const inputChange = (e) => {
    setInput(e.target.value);
  }
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <Input inputChange={inputChange} />
          <div className="output">{input}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
