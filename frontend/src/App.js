import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Components/Input';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const inputChange = (e) => {
    const markup = e.target.value;
    axios({
      method: 'post',
      url: '/api/text',
      data: {
        html: markup
      }
    }).then(() => setInput(markup));
  }

  useEffect(() => {
    console.log('using effect');
    axios({
      method: 'get',
      url: '/api/text'
    }).then(res => setOutput(res.data.html));
  }, [input]);

  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <Input inputChange={inputChange} />
          <div className="output">{output}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
