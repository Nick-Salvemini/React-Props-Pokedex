import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // if you have global styles
import App from './App'; // import your App component

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);