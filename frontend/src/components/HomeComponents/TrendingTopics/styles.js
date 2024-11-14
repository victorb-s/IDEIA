import styled, { css } from "styled-components";

const esconder = css`
    @media (max-width: 480px) {
        .esconderMobile{
            display: none;
        }
    }
`

export const TopicosConteiner = styled.div`
    width: 88%;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #DA251C;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 95%;
        padding: 15px;
    }

    @media (max-width: 480px) {
        width: 95%;
        padding: 10px;
    }

    ${esconder}
`;

export const Titulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
    color: #DA251C;
    font-size: clamp(1.1rem, 3vw, 2rem);
    margin-left: 10px;
    margin-bottom: 3vh;
    }

    .linha {
    height: 1px;
    width: 100%;
    max-width: 90%;
    background-color: #DA251C;
    margin-bottom: 3vh;
    }

    @media (max-width: 768px) {
        .linha{
            max-width: 85%;
        }
    }

    @media (max-width: 480px) {
        h1{
            margin-left: 5px;
            margin-bottom: 1vh;
        }

        .linha{
            max-width: 75%;
            margin-bottom: 1vh;
        }
    }
`;

export const Topicos = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: clamp(0.8rem, 2vw, 1.4rem);
    margin-top: 10px;

    .sortIcon{
        cursor: pointer;
        margin-left: 10px;
        font-size: clamp(0.6rem, 2vw, 1.2rem);
    }
`;

export const TableHeader = styled.th`
    padding: 10px;
    color: #da251c;
    font-weight: bold;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    border-bottom: 1px solid #ddd;
    min-width: 150px;

    @media (max-width: 768px) {
        padding: 8px;
    }

    @media (max-width: 480px) {
        padding: 6px;
    }
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
    font-size: clamp(0.6rem, 2vw, 1.2rem);

    @media (max-width: 768px) {
        padding: 8px;
    }

    @media (max-width: 480px) {
        padding: 6px;
    }
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
    font-size: clamp(0.5rem, 2vw, 1rem);

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:hover {
        background-color: #DA251C;
        color: #fff;
    }

    @media (max-width: 768px) {
        padding: 4px 8px;
    }

    @media (max-width: 480px) {
        padding: 3px 6px;
    }
`;

export const PaginationText = styled.span`
    font-size: clamp(0.6rem, 2vw, 1rem);
    color: #034C8C;
`;

export const CategoriaButton = styled.button`
    background-color: ${(props) => (props.isSelected ? "#DA251C" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "#DA251C")};
    padding: 5px 25px;
    border-radius: 5px;
    margin: 10px 10px;
    font-size: clamp(0.6rem, 1.5vw, 1rem);
    font-weight: bold;
    border: 1px solid #da251c;
    transform: ${(props) => (props.isSelected ? "scale(1.1)" : "scale(1)")};
    cursor: pointer;

    &:hover {
        background-color: #da251c;
        color: white;
    }

    @media (max-width: 768px) {
        padding: 5px 20px;
    }

    @media (max-width: 480px) {
        padding: 3px 10px;
    }
`;