import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 40px;
  background-color: #ffff;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 8px 0;
  width: 100%;
  max-width: 750px;
`;

export const Icon = styled.img`
  position: absolute;
  right: 15px;
  width: 20px;
  height: 20px;
`;

export const ItemText = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin: 0;
  flex: 1;
  text-align: left;

`;