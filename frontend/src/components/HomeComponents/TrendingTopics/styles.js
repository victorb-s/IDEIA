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
    color: #034C8C;
`;