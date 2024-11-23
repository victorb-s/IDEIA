import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --cor-01: ${(props) => props.theme.colors.cor1};
        --cor-02: ${(props) => props.theme.colors.cor2};
        --cor-03: ${(props) => props.theme.colors.cor3};
        --cor-04: ${(props) => props.theme.colors.cor4};

        --cor-01escuro: ${(props) => props.theme.colors.cor1escuro};
        --cor-02escuro: ${(props) => props.theme.colors.cor2escuro};
        --cor-03escuro: ${(props) => props.theme.colors.cor3escuro};

        --backgroundColor: ${(props) => props.theme.colors.backgroundColor};
        --backgroundColor2: ${(props) => props.theme.colors.backgroundColor2};
        --backgroundColor3: ${(props) => props.theme.colors.backgroundColor3};

        --titleColor: ${(props) => props.theme.colors.titleColor};
        --textColor: ${(props) => props.theme.colors.textColor};

        --buttonColor: ${(props) => props.theme.colors.buttonColor};
        --buttonOutlineColor: ${(props) => props.theme.colors.buttonOutlineColor};
        --buttonArrowCircleColor: ${(props) => props.theme.colors.buttonArrowCircleColor};
        --buttonTextColor: ${(props) => props.theme.colors.buttonTextColor};

        --formBackgroundColor: ${(props) => props.theme.colors.formBackgroundColor};
        --formOutlineColor: ${(props) => props.theme.colors.formOutlineColor};

        --trendingDivider: ${(props) => props.theme.colors.trendingDivider};    

        --navLinkColor: ${(props) => props.theme.colors.navLinkColor};
        --navLinkColorHover: ${(props) => props.theme.colors.navLinkColorHover};
        
        --blueHeaderIcons: ${(props) => props.theme.colors.blueHeaderIcons};
        --blueSectionText: ${(props) => props.theme.colors.blueSectionText};
        --blueSectionTextHover: ${(props) => props.theme.colors.blueSectionTextHover};
        --blueHeaderTitleContainer: ${(props) => props.theme.colors.blueHeaderTitleContainer};

        --lineColor: ${(props) => props.theme.colors.lineColor};
        --headerLineColor: ${(props) => props.theme.colors.headerLineColor};
        --blueSectionLineColor: ${(props) => props.theme.colors.blueSectionLineColor};

        --footerColor: ${(props) => props.theme.colors.footerColor};
        --footerIconsColor: ${(props) => props.theme.colors.footerIconsColor};
        --footerSpanColor: ${(props) => props.theme.colors.footerSpanColor};

        --toolbarColor: ${(props) => props.theme.colors.toolbarColor};
        --toolbarColorHover: ${(props) => props.theme.colors.toolbarColorHover};

        --togglerBackground: ${(props) => props.theme.colors.togglerBackground};
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
