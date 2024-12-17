import styled, { css } from "styled-components";
import { motion } from 'motion/react';

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
    background-color: var(--backgroundColor);
    border: 1px solid var(--lineColor);
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
    color: var(--titleColor);
    font-size: clamp(1.1rem, 3vw, 2rem);
    margin-left: 10px;
    margin-bottom: 3vh;
    }

    .linha {
    height: 1px;
    width: 100%;
    max-width: 90%;
    background-color: var(--lineColor);
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
    
    min-width: 150px;

    color: var(--lineColor);
    font-weight: bold;
    font-size: clamp(0.8rem, 2vw, 1.2rem);

    border-bottom: 1px solid var(--lineColor);


    @media (max-width: 768px) {
        padding: 8px;
    }

    @media (max-width: 480px) {
        padding: 6px;
    }
`;

export const TableRow = styled(motion.tr)`
    &:nth-child(even) {
        background-color: var(--backgroundColor2);
    }
`;

export const TableCell = styled.td`
    padding: 10px;
    border-bottom: 1px solid var(--trendingDivider);
    color: var(--buttonTextColor);
    max-width: 150px;
    word-wrap: break-word;
    white-space: normal;
    font-size: clamp(0.7rem, 2vw, 1.2rem);

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
    border: 1px solid var(--lineColor);
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin: 0 10px;
    color: var(--lineColor);
    font-size: clamp(0.5rem, 2vw, 1rem);

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:hover {
        background-color: var(--lineColor);
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
    color: var(--buttonTextColor);
`;

export const CategoriaButton = styled.button`
    background-color: ${(props) => (props.isSelected ? "var(--lineColor)" : "var(--backgroundColor)")};
    color: ${(props) => (props.isSelected ? "white" : "var(--titleColor)")};
    padding: 5px 25px;
    border-radius: 5px;
    margin: 10px 10px;
    font-size: clamp(0.6rem, 1.5vw, 1rem);
    font-weight: bold;
    border: 1px solid ${(props) => (props.isSelected ? "var(--lineColor)" : "var(--titleColor)")};
    transform: ${(props) => (props.isSelected ? "scale(1.1)" : "scale(1)")};
    cursor: pointer;

    &:hover {
        background-color: var(--lineColor);
        color: white;
    }

    @media (max-width: 768px) {
        padding: 5px 20px;
    }

    @media (max-width: 480px) {
        padding: 3px 10px;
    }
`;