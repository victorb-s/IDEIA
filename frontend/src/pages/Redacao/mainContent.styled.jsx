import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fdfdfd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  padding: 10px 0;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

export const Content = styled.div`
  padding: 20px;
  font-size: 1em;
  min-height: 400px;
  outline: none;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
  background-color: #fff;
  &:focus {
    border-color: #007bff;
  }
`;

export const Footer = styled.footer`
  padding: 10px 0;
  font-size: 0.9em;
  text-align: center;
  color: #666;
  margin-top: 10px;
`;
