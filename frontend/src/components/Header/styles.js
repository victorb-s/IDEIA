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