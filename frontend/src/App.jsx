import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import Informacao from './pages/InfosConteudo'
import Redacao from './pages/Redacao'
import Sugestoes from './pages/SugesTitulo'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global";

import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSelectTopic = (topic) => {
    setTopic(topic);
    navigate('/sugestoes');
  }

  const handleSelectTitle = (title) => {
    setTitle(title);
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
    <Routes>
      <Route path='/' element={<Home toggleTheme={toggleTheme} handleSelectTopic={handleSelectTopic}/>}/>
      <Route path='/informacoes' element={<Informacao toggleTheme={toggleTheme}/>}/>
      <Route path='/sugestoes' element={<Sugestoes toggleTheme={toggleTheme} topic={topic} handleSelectTitle={handleSelectTitle}/>}/>
      <Route path='/redacao' element={<Redacao toggleTheme={toggleTheme} titleHeader={title}/>}/>
    </Routes>
    </ThemeProvider>
  </>)
}

export default App
