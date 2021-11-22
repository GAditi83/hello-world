import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [ show, setShow ] = useState();
  return (
    <div className="App">
      <button className="hello-button" onClick={() => setShow(!show)} >{show ? 'Reset' : 'Say Hello'}</button>
      {show && (<h1 className="hello-message">Hello World</h1>)}
    </div>
  );
}

export default App;
