import styled, { css } from 'styled-components'
import { Link } from "react-router-dom"
import { motion } from 'motion/react'

const ResponsiveHamburguer = css`
    @media (min-width: 769px){
        .hambNav{
            display: none;
        }
    }
`

export const HeaderContainer = styled(motion.header)`
    width: 100%;
    height: 8vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 5vw;
    position: relative;
    background: var(--backgroundColor);
    z-index: 99;

    &::after{
        position: absolute;
        content: '';
        left: 5%;
        bottom: 0;
        width: 90%;
        height: 1px;
        background: var(--headerLineColor);
    }
    
    .hambNav{
        color: var(--lineColor);
        z-index: 1000;
        font-size: clamp(1.5rem, 2.5vw, 1.7rem);
    }

    .open{
        right: 0;
    }

    ${ResponsiveHamburguer}
`

export const HeaderContainerB = styled(motion.header)`
    width: 100%;
    height: 8vh;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 5vw;
    position: relative;
    background: var(--backgroundColor);
    z-index: 99;
`

const ResponsiveLeft = css`
    @media (max-width: 1024px){
        max-width: 50%;
        .headerLogo{
            max-width: 4vw;
        }
    }

    @media (max-width: 768px){
        max-width: 60%;
        .headerLogo{
            max-width: 5vw;
        }
    }

    @media (max-width: 425px){
        max-width: 70%;
        .headerLogo{
            max-width: 8vw;
        }
    }
`

export const ContainerLeft = styled.div`
    display: flex;
    width: 100%;
    max-width: 40%;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;

    .headerLogo{
        width: 100%;
        max-width: 2.5vw;
        cursor: pointer;
    }

    ${ResponsiveLeft}
`

export const TituloContainer = styled.div`
    padding: 1vh 1vw;
    border: 1px solid #03030330;
    border-radius: 5px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: clamp(0.7rem, 2vw, 1rem);
    color: #838383;
    //finalizar darktheme aqui!!!!
`

export const IconContainer = styled.div`
    color: #034C8C;
    //finalizar darktheme aqui!!!!
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    cursor: pointer;
`

const ResponsiveNavCont = css`
    @media (max-width: 768px){
        position: fixed;
        top: 0;
        right: -100%;
  
        flex-direction: column;
        text-align: center;
        z-index: 999;

        background-color: var(--backgroundColor);
        opacity: 0.8;
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);

        width: 80%;
        height: 100%;
        padding: 6rem 3rem 0;
        transition: right 0.4s;
    }
`

export const NavContainer = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2.5rem;

    list-style: none;

    ${ResponsiveNavCont}
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: var(--navLinkColor);
    font-size: 15px;
    
    display: inline-block;
    transition: 0.2s ease-in-out;

    &:hover{
        color: var(--textColor);
        transform: scale(1.05);
    }
`