import {createGlobalStyle} from "styled-components";
import {Fonts} from "./fonts";

const GlobalStyles = createGlobalStyle`
    ${Fonts};
    :root{
        --black: #0f0e0e;
        --burlywood: #f6c9a0;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Jakarta;
    }
    html{
        background-color: var(--burlywood)
    }

    a{
        color: inherit;
        text-decoration: none;
    }

`

export {GlobalStyles}