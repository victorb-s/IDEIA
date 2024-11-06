import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Toolbar from './toolbar.jsx'

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

const TitleInput = styled.input`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  resize: none;
`;

function Redacao({ title, setTitle, content, setContent }) {
  return (
    <Container>
      <GlobalStyle/>
      <Toolbar/>  
    </Container>
  );
}

export default Redacao;
