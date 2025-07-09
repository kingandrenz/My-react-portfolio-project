import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import './theme.css';

export default function LightDarkMode() {
  
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  
  function handleToggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>change theme</button>
      </div>
    </div>
    )
}