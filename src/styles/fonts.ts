import {css} from "styled-components";
import Monument from "../fonts/MonumentExtended-Bold.otf";
import GroteskLight from "../fonts/founders-grotesk-test-light.woff";
import GroteskSemiBold from "../fonts/founders-grotesk-test-semibold.woff";



let styles = "";

const fontsArr = [
    {
        name:"Monument",
        src: Monument,
        weight: 400,
    },
    {
        name: "Grotesk",
        src: GroteskLight,
        weight: 200,
    },
    {
        name: "Grotesk",
        src: GroteskSemiBold,
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