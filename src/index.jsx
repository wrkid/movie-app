import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);

// imgUrl = https://image.tmdb.org/t/p/original/ + el.backdrop_path
