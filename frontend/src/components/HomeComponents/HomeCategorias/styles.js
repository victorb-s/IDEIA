import styled from "styled-components";
import JCrainbow from "../../../assets/JC rainbow.svg";
import ArrowUp from "../../../assets/arrow-up.svg";

export const GeneralContainer = styled.div`
    display: flex;
    justify-content: end;
    
    height: 60vh;
    padding-top: 10vh;
    padding-bottom: 138px;

    background-image: url(${JCrainbow});
    background-repeat: no-repeat;
    background-position-y: 10%;
`;

export const CategoryForms = styled.form`
    display: flex;
    width: 40vw;
    text-align: end;
    gap: 16px;
    flex-direction: column;
    padding-right: 118px;
    align-items: end;

    h1 {
        font-size: 64px;
        color: #da251c;
    }
    label {
        font-size: 18px;
        font-weight: 300;
    }
    .textInput {
        width: 256px;
        padding: 8px 12px;
        border: 0;
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
        background-image: url(${ArrowUp});
        width: 32px;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-color: white;
    }
`;
