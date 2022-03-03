import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MantineProvider theme={{ colorScheme: 'dark' }} withNormalizeCSS withGlobalStyles>
        <App />
      </MantineProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
