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

    img{
        width: 100%;
        display: block;
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
        font-family: Roobert;
        font-weight: 400;
        font-size: calc(var(--VW)*1.4);
        word-spacing: calc(var(--VW) *0.2);
        line-height: 130%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        @media (hover: none) and (pointer: coarse)   {
            font-size: calc(var(--VW)*3);
            word-spacing: calc(var(--VW) *0.5);
        }
        @media (hover: none) and (pointer: coarse) and (max-width: 500px){
            font-size: calc(var(--VW)*4.5);
            word-spacing: calc(var(--VW) *0.5);
        }
    }

    a{
        color: inherit;
        text-decoration: none;
        font-weight: 800;
        text-transform: uppercase;
        mix-blend-mode: difference;
        outline: none;
        &:hover{
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: calc(var(--VW)*0.14) var(--black);
            cursor: none;
        }
    }

`

export {GlobalStyles}