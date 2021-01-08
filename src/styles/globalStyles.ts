import {createGlobalStyle} from "styled-components";
import {Fonts} from "./fonts";

const GlobalStyles = createGlobalStyle`
    ${Fonts};
    :root{
        --black: #0f0e0e;
        --burlywood: #f6c9a0;
        --grey: #866c55;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Jakarta;
    }

    h1, h2, h3, h4, h5, p, a{
        color: var(--black);
    }

    html{
        background-color: var(--burlywood);
        cursor: none;
        overflow: hidden;
    }

    p{
        word-spacing: 0.2vw;
        line-height: 140%;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

`

export {GlobalStyles}