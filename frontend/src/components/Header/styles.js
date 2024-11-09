import styled from 'styled-components'
import { Link } from "react-router-dom"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 5vw;
    position: relative;
    background: #fff;
    z-index: 99;

    &::after{
        position: absolute;
        content: '';
        left: 5%;
        bottom: 0;
        width: 90%;
        height: 1px;
        background: #DA251C;
    }
`

export const HeaderContainerB = styled.header`
    width: 100%;
    height: 10vh;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 2vw;
    position: relative;
    background: #fff;
    z-index: 99;
`

export const ContainerLeft = styled.div`
    display: flex;
    width: 100%;
    max-width: 40%;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
`

export const TituloContainer = styled.div`
    padding: 1vh 1vw;
    border: 1px solid #03030330;
    border-radius: 5px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: #838383;
`

export const IconContainer = styled.div`
    color: #034C8C;
    font-size: 2rem;
    cursor: pointer;
`

export const NavContainer = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2.5rem;

    list-style: none;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #636363;
    font-size: 15px;
    
    display: inline-block;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #030303;
        transform: scale(1.05);
    }
`