import styled from "styled-components";

export const TopicosConteiner = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
`;

export const Titulo = styled.h1`
    color: #da251c;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 5%;
`;
export const Linha = styled.div`
    flex-grow: 1;
    height: 1px;
    width: 90%;
    margin-left: 5%;
    background-color: #DA251C;
`;

export const Topicos = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
`;
export const TableHeader = styled.th`
    padding: 10px;
    color: #da251c;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableCell = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    color: #555;
`;