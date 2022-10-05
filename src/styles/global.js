import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  'Quicksand', sans-serif;
    }

    body {
        background-color: ${props => props.theme.colors.background};
    }

    :root {
        --dark-primary-color: #31255a;
        --brown: #5b3b49;
        --white: #fff;
        --gray: #a6a6a6;
        --background-gray: #eee;
        --code-block: #282A36;
        --main-gray: #494850;
        --dark-background: #10101A;
    } 
`;
