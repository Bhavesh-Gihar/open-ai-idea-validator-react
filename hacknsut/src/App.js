import './App.css';
import React from 'react';
import './index.css';
import HeaderAI from './components/HeaderAI.jsx'
import TextAI from './components/TextAI.jsx'
import InterfaceAI from './components/InterfaceAI.jsx'

function App() {
  return (
    <div className="App">
      <HeaderAI />
      <TextAI />
      <InterfaceAI />
    </div>
  );
}

export default App;
