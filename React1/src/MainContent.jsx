import React, { useContext } from 'react';
import ThemeContext from './components/ThemeContext';


const MainContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const pageStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s'
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>
        Current Theme: {theme}
      </h1>
      
      <button 
        onClick={toggleTheme} 
        style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default MainContent