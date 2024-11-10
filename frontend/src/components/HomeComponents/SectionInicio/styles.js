import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import RainbowSide from '../../../assets/JCRainbow.svg';

const ResponsiveContainer = css`
    @media (max-width: 1024px) {
        background: none;
        height: 70vh;
    }

    @media (max-width: 768px) {
        height: 50vh;
    }
`

export const Container = styled.div`
    height: 90vh;
    width: 100vw;
    max-width: 100%;
    margin: 0 auto;

    display: flex;

    background: url(${RainbowSide});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    ${ResponsiveContainer}
`

const ResponsiveColumn = css`
    @media (max-width: 1024px) {
        max-width: 60%;
    }

    @media (max-width: 768px) {
        max-width: 75%;
    }

    @media (max-width: 480px) {
        max-width: 90%;
    }
`

export const Column = styled.div`
    height: 100%;
    width: 100vw;
    max-width: 42%;

    padding-top: 10vh;
    padding-left: 10vw;

    display: flex;
    flex-direction: column;

    ${ResponsiveColumn}
`


export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #DA251C;
        font-size: clamp(1.6rem, 4vw, 4rem);
    }

    p{
        padding-top: 3vh;
        font-size: clamp(0.8rem, 2vw, 1.1rem);
        text-align: justify;
        font-weight: 300;
    }
`

const ResponsiveBtnContainer = css`
    @media (max-width: 1024px) {
        width: 20vw;
    }

    @media (max-width: 768px) {
        width: 25vw;
    }

    @media (max-width: 480px) {
        width: 35vw;
        height: 4vh;
    }
`

export const ButtonContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 15vw;
    height: 5vh;
    margin-top: 3vh;

    border: 1px solid #034C8C70;
    border-radius: 25px;

    text-decoration: none;
    transition: 0.2s ease-in-out;

    ${ResponsiveBtnContainer}

    p{
        color: #034C8C;
        font-size: clamp(0.7rem, 2vw, 1rem);
        padding-left: 1vw;
    }

    &:hover{
        transform: scale(1.02);
    }
`

const ResponsiveAC = css`
    @media (max-width: 1024px) {
        width: 20%;
    }


`

export const ArrowCircle = styled.div`
    background: #034C8C20;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 16%;
    height: 100%;

    ${ResponsiveAC}
`

export const IconArrow = styled(FontAwesomeIcon)`
    color: #034C8C;
    font-weight: bold;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
`

// export const ImageSide = styled.img`
//     position: absolute;
//     right: 0;
//     top: 10vh;
//     z-index: 1;

//     width: 36%;
// `