import styled, { css } from "styled-components";
import { motion } from 'motion/react';

const ResponsiveContainer = css`
    @media (max-width: 1024px) {
        background: none;
        height: 70vh;
    }

    @media (max-width: 768px) {
        height: 50vh;
    }
`

export const GeneralContainer = styled(motion.div)`
    display: flex;
    justify-content: end;
    
    height: 60vh;
    padding-top: 10vh;
    padding-bottom: 138px;

    background-image: url('/JCRainbowAlt.svg');
    background-repeat: no-repeat;
    background-position-y: 10%;

    ${ResponsiveContainer}
`;

const ResponsiveForms = css`
    @media (max-width: 1024px) {
        width: 60%;

        .textInput {
            width: 25vw;
        }
    }

    @media (max-width: 768px) {
        width: 75%;

        .textInput {
            width: 35vw;
        }
    }

    @media (max-width: 480px) {
        width: 90%;

        .textInput {
            width: 50vw;
        }
    }
`

export const CategoryForms = styled(motion.form)`
    display: flex;
    width: 40vw;
    text-align: end;
    gap: 16px;
    flex-direction: column;
    padding-right: 6vw;
    align-items: end;

    h1 {
        font-size: clamp(1.6rem, 4vw, 4rem);
        color: var(--titleColor);
    }

    label {
        font-size: clamp(0.8rem, 2vw, 1.1rem);
        font-weight: 300;
        color: var(--textColor);
    }

    .textInput {
        width: 15vw;
        padding: 8px 12px;
        border: 0;
        background-color: var(--backgroundColor2);
        color: var(--textColor);
        &::placeholder {
            color: var(--textColor);
            opacity: 0.6;
        }
        outline:none;
        font-size: clamp(0.7rem, 2vw, 1rem);
    }

    .divInput {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #00000050;
        align-items: center;
        text-align: center;
    }

    .submitInput {
        border: none;
        width: 32px;
        height: 100%;
        background: transparent;
        font-size: clamp(1rem, 2vw, 1.2rem);
        color: var(--lineColor);
        cursor: pointer;
        transition: 0.3s ease;

        &:hover{
            transform: scale(1.1);
        }
    }

    ${ResponsiveForms}
`;
