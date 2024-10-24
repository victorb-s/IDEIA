import styled from 'styled-components';

export const ProjNavContainer = styled.nav`
    width: 100%;
    height: 4vh;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 1px rgba(0,0,0,0.1);
`

export const ControlsContainer = styled.div`
    display:flex;
    & button{
        border: none;
        font-size: 24px;
    }
`

export const Input = styled.div`
    border: none;

    & input{
        border: none;
        font-size: 18px;
    }
    & input:focus{
        outline: none;
    }
    
`