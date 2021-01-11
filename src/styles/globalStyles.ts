import {createGlobalStyle} from "styled-components";
import {Fonts} from "./fonts";
import {Locomotive} from "./locomotive";

const GlobalStyles = createGlobalStyle`
    ${Fonts};
    ${Locomotive};

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

    li{
        list-style: none;
    }

    html{
        overflow: hidden;
        min-height: -webkit-fill-available;
    }


    body{
        background-color: var(--burlywood);
        cursor: none;
        isolation: isolate;
        min-height: 100vh;
        min-height: -webkit-fill-available;
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
        transition: 0.3s all ease-out;
        /* -webkit-text-fill-color: var(--black);
        -webkit-text-stroke: 0.14vw var(--burlywood); */
        &:hover{
            transition: 0.3s all ease-out;
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: 0.14vw var(--black);
        }
    }

`

export {GlobalStyles}