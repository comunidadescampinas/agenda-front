/* Libraries */
import React from 'react';
import ReactDOM from 'react-dom';

/* Styles */
import './index.css';
import 'typeface-roboto';

/* App */
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Startup */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
