import {css} from "styled-components";
import Monument from "../fonts/MonumentExtended-Bold.otf";
import RoobertLight from "../fonts/Roobert-Light.otf";
import RoobertSemiBold from "../fonts/Roobert-SemiBold.otf";



let styles = "";

const fontsArr = [
    {
        name:"Monument",
        src: Monument,
        weight: 400,
    },
    {
        name: "Roobert",
        src: RoobertLight,
        weight: 200,
    },
    {
        name: "Roobert",
        src: RoobertSemiBold,
        weight: 600,
    }
]

for(const font of fontsArr){
    styles += `
        @font-face {
            font-family: ${font.name};
            src: url(${font.src});
            font-weight: ${font.weight};
            font-style: normal;
            font-display: auto;
        }
    `
}

const Fonts = css`
    ${styles}
`

export {Fonts};