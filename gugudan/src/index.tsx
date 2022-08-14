import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GuGuDan from './GuGuDan';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GuGuDan />
  </React.StrictMode>
);
