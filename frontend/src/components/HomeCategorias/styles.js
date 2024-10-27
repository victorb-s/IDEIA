import styled from "styled-components";
import JCrainbow from "../../assets/JC rainbow.svg";
import ArrowUp from "../../assets/arrow-up.svg";

export const GeneralContainer = styled.div`
    display: flex;
    background-image: url(${JCrainbow});
    padding-top: 70px;
    background-repeat: no-repeat;
    justify-content: end;
    background-position-y: 20%;
    padding-bottom: 138px;
`;

export const CategoryForms = styled.form`
    display: flex;
    width: 570px;
    text-align: end;
    gap: 16px;
    flex-direction: column;
    padding-right: 118px;
    align-items: end;

    h1 {
        font-size: 46px;
        color: #da251c;
    }
    label {
        font-size: 15px;
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
