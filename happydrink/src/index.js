import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './assets/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Happy Drunk"/>, document.getElementById('root'));
registerServiceWorker();
