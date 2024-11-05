import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        max-width: 100vw;
        scroll-behavior: smooth;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    :root{
        --cor-01: #DA251C;
        --cor-02: #034C8C;
        --cor-03: #038C33;
        --cor-04: #F4AD04;
    }
`