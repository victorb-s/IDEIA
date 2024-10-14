import { CreateGlobalStyle } from 'styled-components'

export const GlobalStyle = CreateGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        max-width: 100vw;
        scroll-behavior: smooth;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }
`