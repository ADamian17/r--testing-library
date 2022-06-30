import React from 'react';
import logo from './logo.svg';
import './App.css';

export const content = `
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
</header>`;

function App() {
  return (
    <div data-testid="app" className="App">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default App;
