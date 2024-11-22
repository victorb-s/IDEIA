import { HeaderBlue } from '../../components/Header'
import Toolbar from './toolbar.jsx'
import { useState, useEffect } from 'react';

import { api } from '../../services/app';
import { Container } from './styles.js';

// eslint-disable-next-line no-unused-vars, react/prop-types
const Redacao = ({ titleHeader, toggleTheme}) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await api.get(`/v1/title/generate-summary?title=${titleHeader}`);
      console.log(response.data);
      setContent(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
      fetchData();
  }, []);
  
  return (<div style={{backgroundColor: 'var(--backgroundColor3)'}}>
    <HeaderBlue toggleTheme={toggleTheme} titleHeader={titleHeader}/>
    <Container>
      <Toolbar content={content.summary} loading={loading}/>
    </Container>
  </div>);
}

export default Redacao;
