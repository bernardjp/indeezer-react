import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './components/StyleProvider/StyleProvider';
import QueryProvider from './components/QueryProvider/QueryProvider';
import './styles/index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <StyleProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </StyleProvider>
    </Router>
  </React.StrictMode>
);
