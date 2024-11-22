import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --cor-01: ${(props) => props.theme.cor1};
        --cor-02: ${(props) => props.theme.cor2};
        --cor-03: ${(props) => props.theme.cor3};
        --cor-04: ${(props) => props.theme.cor4};

        --cor-01escuro: ${(props) => props.theme.cor1escuro};
        --cor-02escuro: ${(props) => props.theme.cor2escuro};
        --cor-03escuro: ${(props) => props.theme.cor3escuro};

        
        --backgroundColor: ${(props) => props.theme.backgroundColor};
        --backgroundColor2: ${(props) => props.theme.backgroundColor2};

        --titleColor: ${(props) => props.theme.titleColor};
        --textColor: ${(props) => props.theme.textColor};

        --buttonColor: ${(props) => props.theme.buttonColor};
        --buttonOutlineColor: ${(props) => props.theme.buttonOutlineColor};
        --buttonArrowCircleColor: ${(props) => props.theme.buttonArrowCircleColor};
        --buttonTextColor: ${(props) => props.theme.buttonTextColor};

        --trendingDivider: ${(props) => props.theme.trendingDivider};

        --navLinkColor: ${(props) => props.theme.navLinkColor};

        --lineColor: ${(props) => props.theme.lineColor};

        --headerLineColor: ${(props) => props.theme.headerLineColor};

        --footerColor: ${(props) => props.theme.footerColor};
        --footerIconsColor: ${(props) => props.theme.footerIconsColor};
        --footerSpanColor: ${(props) => props.theme.footerSpanColor};

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
        background-color: var(--backgroundColor2);
        overflow-x: hidden;
    }

    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--titleColor);
        border-radius: 8px;
    }
`;
