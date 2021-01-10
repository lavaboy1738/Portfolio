import XpensityV2 from "../assets/images/projects/xpensityv2-sm.png";
import Agency from "../assets/images/projects/digital-agency-sm.png";
import XpensityV1 from "../assets/images/projects/xpensityv1-sm.png";
import Portfolio from "../assets/images/projects/portfolio-sm.png";
import LGN from "../assets/images/projects/lgn-sm.png";
import ECommerce from "../assets/images/projects/e-commerce-sm.png";
import LavaUI from "../assets/images/projects/Lava-UI-sm.png";

export type WorksListItem = {
    id: string,
    title: string,
    src: string,
    leftFlex: 0|1|2|3,
    rightFlex: 0|1|2|3,
    thumbnailOffset: string,
}

export const WorksList: WorksListItem[] = [
    {
        id: "Xpensity-V2",
        title: "Xpensity V2",
        src: XpensityV2,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "50%",
    },
    {
        id: "Agency",
        title: "Agency",
        src: Agency,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "50%",
    },
    {
        id: "Xpensity-V1",
        title: "Xpensity V1",
        src: XpensityV1,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "50%",
    },
    {
        id: "Portfolio",
        title: "Portfolio",
        src: Portfolio,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "50%",
    },
    {
        id: "LGN",
        title: "LGN",
        src: LGN,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "50%",
    },
    {
        id: "E-Commerce",
        title: "E-Commerce",
        src: ECommerce,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "50%",
    },
    {
        id: "Lava-UI",
        title: "Lava UI",
        src: LavaUI,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "50%",
    }
]