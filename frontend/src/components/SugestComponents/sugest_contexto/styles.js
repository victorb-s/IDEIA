import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
    color: #034C8C;
    font-weight: bold;
    font-size: clamp(0.7rem, 2vw, 1rem);
    margin: 5vh 0;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #1a5bb8;
        transform: scale(1.05);
    }
`