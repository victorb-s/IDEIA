import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Informacao from './pages/InfosConteudo'
import Redacao from './pages/Redacao'
import Sugestoes from './pages/SugesTitulo'

const App = () => {
  return (<>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/informacoes' element={<Informacao/>}></Route>
      <Route path='/redacao' element={<Redacao/>}></Route>
      <Route path='/sugestoes' element={<Sugestoes/>}></Route>
    </Routes>
  </>)
}

export default App
