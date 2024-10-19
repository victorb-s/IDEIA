import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 5vw;
    position: relative;

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