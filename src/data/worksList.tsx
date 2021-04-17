import XpensityV2 from "../assets/images/projects/xpensityv2-sm.webp";
import Agency from "../assets/images/projects/digital-agency-sm.webp";
import XpensityV1 from "../assets/images/projects/xpensityv1-sm.webp";
import Portfolio from "../assets/images/projects/portfolio-sm.webp";
import LGN from "../assets/images/projects/lgn-sm.webp";
import ECommerce from "../assets/images/projects/e-commerce-sm.webp";
import LavaUI from "../assets/images/projects/Lava-UI-sm.webp";

export type WorksListItem = {
    id: string,
    title: string,
    src: string,
    leftFlex: 0|1|2|3,
    rightFlex: 0|1|2|3,
    thumbnailOffset: string,
    offsetX: number,
    offsetY: number,
}

export const WorksList: WorksListItem[] = [
    {
        id: "xpensity-v2",
        title: "Xpensity V2",
        src: XpensityV2,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "60%",
        offsetX: 30,
        offsetY: -10,
    },
    {
        id: "portfolio",
        title: "Portfolio",
        src: Portfolio,
        leftFlex: 3,
        rightFlex: 1,
        thumbnailOffset: "20%",
        offsetX: 30,
        offsetY: -10,
    },
    {
        id: "xpensity-v1",
        title: "Xpensity V1",
        src: XpensityV1,
        leftFlex: 1,
        rightFlex: 3,
        thumbnailOffset: "70%",
        offsetX: -10,
        offsetY: 5,
    },
    {
        id: "lava-ui",
        title: "Lava UI",
        src: LavaUI,
        leftFlex: 1,
        rightFlex: 1,
        thumbnailOffset: "10%",
        offsetX: -10,
        offsetY: -2,
    },
    {
        id: "agency",
        title: "Agency",
        src: Agency,
        leftFlex: 1,
        rightFlex: 3,
        thumbnailOffset: "60%",
        offsetX: 30,
        offsetY: -2,
    },
    {
        id: "e-commerce",
        title: "E-Commerce",
        src: ECommerce,
        leftFlex: 3,
        rightFlex: 0,
        thumbnailOffset: "15%",
        offsetX: 25,
        offsetY: 10,
    },
    {
        id: "lgn",
        title: "LGN",
        src: LGN,
        leftFlex: 1,
        rightFlex: 2,
        thumbnailOffset: "60%",
        offsetX: 30,
        offsetY: 5,
    }
]