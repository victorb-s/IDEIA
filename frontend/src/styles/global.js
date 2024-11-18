import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --cor-01: #DA251C;
        --cor-02: #034C8C;
        --cor-03: #038C33;
        --cor-04: #F4AD04;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        max-width: 100vw;
        scroll-behavior: smooth;
        word-wrap: break-word;
        overflow-wrap: break-word;


        font-family: 'Roboto', sans-serif;
    }

    body, html{
        overflow-x: hidden;
    }

    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #da251c;
        border-radius: 8px;
    }
`