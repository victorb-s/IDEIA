import styled, { createGlobalStyle } from 'styled-components';
import { HeaderBlue } from '../../components/Header'
import Toolbar from './toolbar.jsx'
import { useState, useEffect } from 'react';

import { api } from '../../services/app';

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#ededed;
  }
`;

const Container = styled.div`
  width: 60%;
  margin: 40px auto;
  padding: 20px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  // background-color: #ededed;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// eslint-disable-next-line no-unused-vars, react/prop-types
const Redacao = ({ titleHeader }) => {
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
  
  return (<>
    <HeaderBlue titleHeader={titleHeader}/>
    <Container>
      <GlobalStyle/>
      <Toolbar content={content.summary} loading={loading}/>
    </Container>
  </>);
}

export default Redacao;
