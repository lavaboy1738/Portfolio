import {css} from "styled-components";
import JakartaLightWoff from "../fonts/PlusJakartaSans-Light.woff";
import JakartaLightWoff2 from  "../fonts/PlusJakartaSans-Light.woff2";
import Monument from "../fonts/MonumentExtended-Bold.otf";

const jakartaNormalWeights = {
    200: [JakartaLightWoff, JakartaLightWoff2],
}


let styles = "";

for(const [key, weights] of Object.entries(jakartaNormalWeights)) {
    const woff = weights[0];
    const woff2 = weights[1];

    styles += `
        @font-face{
            font-family: "Jakarta";
            src: url(${woff2}) format("woff2"),
                url(${woff}) format("woff");
            font-weight: ${key};
            font-style: normal;
            font-display: auto;
        }
    `
}

const Fonts = css`
    ${styles}
    @font-face {
        font-family: "Monument";
        src: url(${Monument});
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }
`

export {Fonts};