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
    }

    h1, h2, h3, h4, h5, p, a{
        color: var(--black);
    }

    h1, h2, h3, h4, a{
        font-family: Monument;
    }

    html{
        overflow: hidden;
    }

    body{
        background-color: var(--burlywood);
        cursor: none;
        isolation: isolate;
    }

    p{
        font-family: Jakarta;
        font-weight: 200;
        font-size: 1.2vw;
        word-spacing: 0.2vw;
        line-height: 140%;
    }

    a{
        color: inherit;
        text-decoration: none;
        font-weight: 800;
        text-transform: uppercase;
        mix-blend-mode: difference;
        &:hover{
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: 0.14vw var(--black);
        }
    }

`

export {GlobalStyles}