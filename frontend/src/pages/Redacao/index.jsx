import styled, { createGlobalStyle } from 'styled-components';
import { HeaderBlue } from '../../components/Header'
import Toolbar from './toolbar.jsx'
import { useState } from 'react';

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
  // background-color: #ededed;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// eslint-disable-next-line no-unused-vars, react/prop-types
const Redacao = ({ title }) => {
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get(`/v1/title/generate-summary?topics=${title}`);
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
    <HeaderBlue title={title}/>
    <Container>
      <GlobalStyle/>
      <Toolbar content={content}/>
    </Container>
  </>);
}

export default Redacao;
