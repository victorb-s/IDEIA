import styled from "styled-components";

export const TopicosConteiner = styled.div`
    width: 88%;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #DA251C;
    border-radius: 10px;
`;

export const Titulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
    color: #DA251C;
    font-size: 30px;
    margin-left: 10px;
    margin-bottom: 20px;
    }

    .linha {
    height: 1px;
    width: 100%;
    max-width: 90%;
    background-color: #DA251C;
    margin-bottom: 20px;
    }

`;

export const Topicos = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 20px;
    margin-top: 10px
`;

export const TableHeader = styled.th`
    padding: 10px;
    color: #da251c;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    min-width: 150px;
`;


export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableCell = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    color: #034C8C;
    max-width: 150px;
    word-wrap: break-word;
    white-space: normal;
`;

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const PaginationButton = styled.button`
    background: none;
    border: 1px solid #DA251C;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin: 0 10px;
    color: #DA251C;
    font-size: 16px;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:hover {
        background-color: #DA251C;
        color: #fff;
    }
`;

export const PaginationText = styled.span`
    font-size: 16px;
    color: #034C8C;
`;

export const CategoriaButton = styled.button`
  background-color: ${(props) => (props.isSelected ? "#DA251C" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "#DA251C")};
  padding: 5px 25px;
  border-radius: 5px;
  margin: 10px 10px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #da251c;
  transform: ${(props) => (props.isSelected ? "scale(1.1)" : "scale(1)")};
  cursor: pointer;

  &:hover {
    background-color: #da251c;
    color: white;
  }
`;