import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleProvider from './components/StyleProvider/StyleProvider';
import QueryProvider from './components/QueryProvider/QueryProvider';
import { PlaylistContextProvider } from './components/Context/PlaylistContext';
import { AudioPlayerContextProvider } from './components/Context/AudioPlayerContext';
import './styles/index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <StyleProvider>
        <QueryProvider>
          <PlaylistContextProvider>
            <AudioPlayerContextProvider>
              <App />
            </AudioPlayerContextProvider>
          </PlaylistContextProvider>
        </QueryProvider>
      </StyleProvider>
    </Router>
  </React.StrictMode>
);
