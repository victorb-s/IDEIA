import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import RainbowSide from '../../../assets/JCRainbow.svg';

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
`

export const Column = styled.div`
    height: 100%;
    width: 100%;
    max-width: 42%;

    padding-top: 10vh;
    padding-left: 10vw;

    display: flex;
    flex-direction: column;

`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #DA251C;
        font-size: 64px;
    }

    p{
        padding-top: 3vh;
        font-size: 18px;
        text-align: justify;
        font-weight: 300;
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

    p{
        color: #034C8C;
        padding-left: 1vw;
    }

    &:hover{
        transform: scale(1.02);
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
`

export const IconArrow = styled(FontAwesomeIcon)`
    color: #034C8C;
    font-weight: bold;
    font-size: 20px;
`

// export const ImageSide = styled.img`
//     position: absolute;
//     right: 0;
//     top: 10vh;
//     z-index: 1;

//     width: 36%;
// `