import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  background-color: #ffff;
  border-bottom: 25px solid #f5f5f5;
`;

export const Logo = styled.img`
  width: 40px;
`;

export const InputPesquisa = styled.input`
  margin: 0 10px;
  padding: 8px;
  max-width:200px;
  font-size: 14px;
  width: 80%;
 font-family: 'Roboto', sans-serif;
 border-color: #f5f5f5;
`;

export const FotoPerfil = styled.img`
width: 30px;
height: 40px;
border-radius: 50%;
margin-left: auto;
`;
