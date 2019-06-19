import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { PlayersProvider } from './context/PlayersContext'

import './index.css';
import App from './App';

ReactDOM.render(
<BrowserRouter>
    <PlayersProvider>
        <App />
    </PlayersProvider> 
</BrowserRouter>, document.getElementById('root'));