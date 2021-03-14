import AwwwardsHonors from "../assets/images/awards/Ronnie_Feng_-PortfolioPrint.webp";
import AwwwardsMobile from "../assets/images/awards/Ronnie_Feng_mobile_portfolioHigh_quality.webp";
import CSSDAKudos from "../assets/images/awards/cssda-special-kudos.webp";
import CSSDAUI from "../assets/images/awards/cssda-ui-Ronnie-Feng.webp";
import CSSDAUX from "../assets/images/awards/cssda-ux-Ronnie-Feng.webp";
import CSSDAInnovation from "../assets/images/awards/cssda-inn-Ronnie-Feng.webp";
import CSSWinner from "../assets/images/awards/CSSW-15167-SOTD-Certificate.webp";
import Jury from "../assets/images/awards/certificate-ronnie-feng-young_jury.webp";

type AwardInfo = {
    id: number,
    text: string,
    imgURL: string,
}

export const AwardsInfo: AwardInfo[] = [
    {
        id: 0,
        text: "Awwwards - Young Jury Member",
        imgURL: Jury
    },
    {
        id: 1,
        text: "Awwwards - Honorable Mention",
        imgURL: AwwwardsHonors
    },
    {
        id: 2,
        text: "Awwwards - Mobile Exellence",
        imgURL: AwwwardsMobile
    },
    {
        id: 3,
        text: "CSSDA - Special Kudos Award",
        imgURL: CSSDAKudos
    },
    {
        id: 4,
        text: "CSSDA - UI Award",
        imgURL: CSSDAUI,
    },
    {
        id: 5,
        text: "CSSDA - UX Award",
        imgURL: CSSDAUX
    },
    {
        id: 6,
        text: "CSSDA - Innovation Award",
        imgURL: CSSDAInnovation
    },
    {
        id: 7,
        text: "CSS Winner - SOTD",
        imgURL: CSSWinner
    }
]