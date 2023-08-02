import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/normal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
