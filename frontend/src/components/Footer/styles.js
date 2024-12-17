import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterContainer = styled.footer`
    width: 100%;
    height: 20vh;

    background: var(--footerColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 50%;

    p{
        color: var(--footerIconsColor);
        text-align: center;
        font-size: clamp(0.7rem , 2vw, 1rem);
    }

    span{
        color: var(--footerSpanColor);
        font-weight: bold;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    margin-top: -3vh;
    margin-bottom: 3vh;

    a{
        text-decoration: none;
    }
`

export const Icons = styled(FontAwesomeIcon)`
    color: var(--footerIconsColor);
    font-size: clamp(1rem, 2vw, 1.4rem);
    transition: 0.2s ease-in-out;

    &:hover{
        color: var(--footerSpanColor);
        transform: scale(1.05);
    }
`