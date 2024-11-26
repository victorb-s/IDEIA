import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AppRoutes from './routes/Routes';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global";

import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSelectTopic = (topic) => {
    setTopic(topic);
    localStorage.setItem('topic', topic);
    navigate('/sugestoes');
  }

  const handleSelectTitle = (title) => {
    setTitle(title);
    localStorage.setItem('title', title);
    navigate('/redacao');
  }

  const usePersistedState = (key, initialState) => {
    const [state, setState] = useState(() => {
      const storedState = localStorage.getItem(key);
      return storedState ? JSON.parse(storedState) : initialState;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
  
    return [state, setState];
  }

  const [theme, setTheme] = usePersistedState('theme', lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };
  
  return (<>
   <ThemeProvider
      theme={theme}
    >
    <GlobalStyle/>
    <AppRoutes
      topic={localStorage.getItem('topic') || topic}
      titleHeader={localStorage.getItem('title') || title}
      toggleTheme={toggleTheme}
      handleSelectTopic={handleSelectTopic}
      handleSelectTitle={handleSelectTitle}
    />
    </ThemeProvider>
  </>)
}

export default App
