import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './components/StyleProvider/StyleProvider';
import QueryProvider from './components/QueryProvider/QueryProvider';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StyleProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </StyleProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
