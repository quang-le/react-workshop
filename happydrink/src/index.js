import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './assets/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Happy Drink" />, document.getElementById('root'));
registerServiceWorker();
