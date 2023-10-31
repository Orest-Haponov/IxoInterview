import React from 'react';
import './App.css';
import { useRoutes } from '../Router/Router';

function App() {
  return (
    <div className="App">
      {useRoutes()}
    </div>
  );
}

export default App;
