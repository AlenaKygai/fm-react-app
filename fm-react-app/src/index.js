import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const reactElement = 
<React.StrictMode>
<App />
</React.StrictMode> ;

ReactDOM.render(
  reactElement,
  document.getElementById('root')
);

reportWebVitals();
