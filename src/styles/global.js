import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  'Quicksand', sans-serif;
    }

    body {
        background-color: #fff;
    }

    :root {
        --primary-color: #f6328f;
        --dark-primary-color: #31255a;
        --secondary-color: #692b8b;
        --brown: #5b3b49;
        --white: #fff;
        --gray: #a6a6a6;
        --background-gray: #eee;
        --code-block: #282A36;
        --main-black: #2C2C34;
        --main-gray: #494850;
    } 
`;
