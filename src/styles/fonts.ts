import {css} from "styled-components";

import JakartaRegularWoff from "../fonts/PlusJakartaSans-Regular.woff";
import JakartaRegularWoff2 from "../fonts/PlusJakartaSans-Regular.woff2";
import JakartaMediumWoff from "../fonts/PlusJakartaSans-Medium.woff";
import JakartaMediumWoff2 from "../fonts/PlusJakartaSans-Medium.woff2";
import JakartaBoldWoff  from "../fonts/PlusJakartaSans-Bold.woff";
import JakartaBoldWoff2 from "../fonts/PlusJakartaSans-Bold.woff2";
import JakartaExtraBoldWoff from "../fonts/PlusJakartaSans-ExtraBold.woff";
import JakartaExtraBoldWoff2 from "../fonts/PlusJakartaSans-ExtraBold.woff2";
import JakartaLightWoff from "../fonts/PlusJakartaSans-Light.woff";
import JakartaLightWoff2 from  "../fonts/PlusJakartaSans-Light.woff2";
import JakartaExtraLightWoff from "../fonts/PlusJakartaSans-ExtraLight.woff";
import JakartaExtraLightWoff2 from "../fonts/PlusJakartaSans-ExtraLight.woff2";

const jakartaNormalWeights = {
    100: [JakartaExtraLightWoff, JakartaExtraLightWoff2],
    200: [JakartaLightWoff, JakartaLightWoff2],
    400: [JakartaRegularWoff, JakartaRegularWoff2],
    500: [JakartaMediumWoff, JakartaMediumWoff2],
    600: [JakartaBoldWoff, JakartaBoldWoff2],
    800: [JakartaExtraBoldWoff, JakartaExtraBoldWoff2]
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
`

export {Fonts};