import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2';
const root = ReactDOM.createRoot(document.getElementById('root'));
function ref() {
  root.render(<App2/>);
}
setInterval(ref, 1000);