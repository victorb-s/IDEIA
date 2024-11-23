import Home from '../pages/Home'
import Informacao from '../pages/InfosConteudo'
import Redacao from '../pages/Redacao'
import Sugestoes from '../pages/SugesTitulo'

import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

// eslint-disable-next-line react/prop-types
const AppRoutes = ({ toggleTheme, handleSelectTopic, handleSelectTitle, topic, titleHeader }) => {
    return (
        <Routes>
            <Route 
                path="/"
                element={<Home toggleTheme={toggleTheme} handleSelectTopic={handleSelectTopic}/>}
            />

            <Route
                path="/informacoes"
                element={<Informacao toggleTheme={toggleTheme}/>}
            />

            <Route 
                path="/sugestoes"
                element={
                    <ProtectedRoute condition={!!topic}>
                        <Sugestoes
                            toggleTheme={toggleTheme}
                            topic={topic}
                            handleSelectTitle={handleSelectTitle}
                        />
                    </ProtectedRoute>
                }
            />

            <Route 
                path="/redacao"
                element={
                    <ProtectedRoute condition={!!titleHeader}>
                        <Redacao
                            toggleTheme={toggleTheme}
                            titleHeader={titleHeader}
                        />
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default AppRoutes;