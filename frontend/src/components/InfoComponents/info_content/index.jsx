import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 780px; 
  margin: 0 auto;
  padding: 26px; 
`;

const Card = styled.div`
  background-color: #f3f3f3;
  border-radius: 10px; 
  padding: 26px; 
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 10px 16px;
  margin-bottom: 21px;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  background: #e0e0e0;
  font-size: 18.2px;
  padding: 5px 10px; 
  border-radius: 5px; 
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
    background-color: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px; 
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px; 
  padding: 10px 16px; 
  resize: vertical;
  font-size: 18.2px; 
  &:focus {
    outline: none;
  }
`;

const Label = styled.p`
  font-size: 18.2px; // Increased from 14px
  margin-bottom: 10px; // Increased from 8px
`;

export default function ContentEditor() {
  const [inputValue, setInputValue] = useState('Deolane vídeo');
  const [textAreaValue, setTextAreaValue] = useState('');

  return (
    <Container>
      <Card>
        <InputWrapper>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Deolane vídeo"
          />
          <svg
            width="21" 
            height="21" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
        </InputWrapper>
        <Label>Digite informações importantes desta palavra-chave:</Label>
        <TextArea
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend commodo tellus"
        />
      </Card>
    </Container>
  );
}