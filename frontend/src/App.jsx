import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import Informacao from './pages/InfosConteudo'
import Redacao from './pages/Redacao'
import Sugestoes from './pages/SugesTitulo'

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
  
  return (<>
   
    <Routes>
      <Route path='/' element={<Home handleSelectTopic={handleSelectTopic}/>}/>
      <Route path='/informacoes' element={<Informacao/>}></Route>
      <Route path='/sugestoes' element={<Sugestoes topic={topic} handleSelectTitle={handleSelectTitle}/>}></Route>
      <Route path='/redacao' element={<Redacao titleHeader={title}/>}></Route>
    </Routes>
  </>)
}

export default App
