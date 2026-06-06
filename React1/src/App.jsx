import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Watchlist from './components/Watchlist'; // 💡 Lowercase 'l'
import Watched from './components/Watched';
import Add from './components/Add';
import ContextProvider from './components/context/GlobalContext';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;