import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
    color: var(--blueSectionText);
    font-weight: bold;
    font-size: clamp(0.75rem, 2vw, 1rem);
    margin: 5vh 0;
    transition: 0.2s ease-in-out;

    &:hover {
        color: var(--blueSectionTextHover);
        transform: scale(1.05);
    }
`