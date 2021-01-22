import XpensityV2LG1 from "../assets/images/projects/xpensityV2/xpensityv2-lg-1.png";
import XpensityV2LG2 from "../assets/images/projects/xpensityV2/xpensityv2-lg-2.png";
import XpensityV2LG3 from "../assets/images/projects/xpensityV2/xpensityv2-lg-3.png";
import XpensityV2TabletMain from "../assets/images/projects/xpensityV2/xpensityV2-tablet-main.png";
import XpensityV2TabletSide from "../assets/images/projects/xpensityV2/xpensityV2-tablet-side.png";

import PortfolioLG1 from "../assets/images/projects/portfolio/portfolio-lg-1.png";
import PortfolioLG2 from "../assets/images/projects/portfolio/portfolio-lg-2.png";
import PortfolioLG3 from "../assets/images/projects/portfolio/portfolio-lg-3.png";
import PortfolioTabletMain from "../assets/images/projects/portfolio/portfolio-tablet-main.png";
import PortfolioTabletSide from "../assets/images/projects/portfolio/portfolio-tablet-side.png";
import PortfolioLaptopMain from "../assets/images/projects/portfolio/portfolio-laptop-main.png";
import PortfolioLaptopSide from "../assets/images/projects/portfolio/portfolio-laptop-side.png";

import AgencyLG1 from "../assets/images/projects/agency/agency-lg-1.png";
import AgencyLG2 from "../assets/images/projects/agency/agency-lg-2.png";
import AgencyLG3 from "../assets/images/projects/agency/agency-lg-3.png";
import AgencyLaptopMain from "../assets/images/projects/agency/agencyLaptop-Main.png";
import AgencyLaptopSide from "../assets/images/projects/agency/agencyLaptop-Side.png";
import AgencyTabletMain from "../assets/images/projects/agency/agency-tablet-main.png";
import AgencyTabletSide from "../assets/images/projects/agency/agency-tablet-side.png";

import XpensityV1LG1 from "../assets/images/projects/xpensityV1/xpensityV1-lg-1.png";
import XpensityV1LG2 from "../assets/images/projects/xpensityV1/xpensityV1-lg-2.png";
import XpensityV1LG3 from "../assets/images/projects/xpensityV1/xpensityV1-lg-3.png";
import XpensityV1TabletMain from "../assets/images/projects/xpensityV1/xpensityV1-tablet-main.png";
import XpensityV1TabletSide from "../assets/images/projects/xpensityV1/xpensityV1-tablet-side.png";

import LGNLG1 from "../assets/images/projects/lgn/lgn-lg-1.png";
import LGNLG2 from "../assets/images/projects/lgn/lgn-lg-2.png";
import LGNLG3 from "../assets/images/projects/lgn/lgn-lg-3.png";
import LGNLaptopMain from "../assets/images/projects/lgn/lgn-laptop-main.png";
import LGNLaptopSide from "../assets/images/projects/lgn/lgn-laptop-side.png";
import LGNTabletMain from "../assets/images/projects/lgn/lgn-tablet-main.png";
import LGNTabletSide from "../assets/images/projects/lgn/lgn-tablet-side.png";

import EConLG1 from "../assets/images/projects/eCommerce/ecommerce-lg-1.png";
import EConLG2 from "../assets/images/projects/eCommerce/ecommerce-lg-2.png";
import EConLG3 from "../assets/images/projects/eCommerce/ecommerce-lg-3.png";
import EConLaptopMain from "../assets/images/projects/eCommerce/ecommerce-laptop-main.png";
import EConLaptopSide from "../assets/images/projects/eCommerce/ecommerce-laptop-side.png";
import EConTabletMain from "../assets/images/projects/eCommerce/ecommerce-tablet-main.png";
import EConTabletSide from "../assets/images/projects/eCommerce/ecommerce-tablet-side.png";

export type ProjectDataType = {
    id: string,
    sequence: number,
    title: string,
    text: string[],
    secondary: string[],
    phoneImgSrc: string[],
    desktopImgSrc: string[] | [],
    tabletImgSrc: string[],
    mobileFirst: boolean,
    githubLink: string,
    liveLink: string,
    next: string,
}

export const ProjectData: ProjectDataType[] = [
    {
        id:"xpensity-v2",
        sequence: 1,
        title: "Xpensity V2",
        text: ["Everyone needs a budgeting tool. Xpensity can help you to get in control of your own daily expenditures. This mobile-first Progressive Web App enables the user to record quick transactions on-the-go. With lightning-fast load time, custom category tags and easy access to the number pad, you can record a transaction in seconds.", "The second iteration of this app is built with React. Changes were made to the UI to motivate and guide user behaviours. The complete separation of income and expenditure tabs forces the user to make a category selection when creating a record. Additionally, data-visualization was added using Apache ECharts for better user experience. Custom labels were dropped after poor feedback from the first iteration." ],
        secondary: ["PWA","React", "TypeScript", "Custom Hooks", "Data Visualization","Interview/Survey", "CSS in JS", "UI/UX"],
        phoneImgSrc: [XpensityV2LG1, XpensityV2LG2, XpensityV2LG3],
        desktopImgSrc: [],
        tabletImgSrc:[XpensityV2TabletMain, XpensityV2TabletSide],
        mobileFirst: true,
        githubLink: "https://github.com/lavaboy1738/xpensity-react",
        liveLink: "https://xpensity-react.netlify.app/",
        next: "portfolio"
    },
    {
        id: "portfolio",
        sequence: 2,
        title: "Portfolio",
        text: ["I woke up one morning at 4:44 a.m.", "The album was released at a very special time in his career. Jay-Z had finally made it to the billionaire's club. He was no longer a rapper and a street hustler, but a businessman, a husband, and a father. Matured, experienced and wealthy, yet, he still struggles with many problems he’s had for years. Fame, success, setbacks, racism, betrayals, the possibility that he cheated on his wife — it's the most loaded and serious discussion that he has delivered.", "This portfolio is an attempt to recapture the feeling when I appreciated the album for the very first time. It's complicated but fulfilling. This is the best work I've produced so far, and I drew inspirations from many places I visited along the way. I credited them in the about page."],
        secondary: ["React", "TypeScript", "Custom Hooks", "Smooth Scroll", "Framer Motion", "Transitions", "CSS in JS", "UI/UX"],
        phoneImgSrc: [PortfolioLG1, PortfolioLG2, PortfolioLG3],
        desktopImgSrc: [PortfolioLaptopMain, PortfolioLaptopSide],
        tabletImgSrc: [PortfolioTabletMain, PortfolioTabletSide],
        mobileFirst: true,
        githubLink: "https://github.com/lavaboy1738/Portfolio",
        liveLink: "https://ronniefeng.com/",
        next: "xpensity-v1"
    },
    {
        id: "xpensity-v1",
        sequence: 3,
        title: "Xpensity-V1",
        text: ["Everyone needs a budgeting tool. Xpensity can help you to get in control of your own daily expenditures. This mobile-first Single Page Application enables the user to record quick transactions on-the-go. With lightning-fast load time, custom category tags and easy access to the number pad, you can record a transaction in seconds.", "The first iteration is built with Vue and state is managed with Vuex. I had the idea of building a personal accounting web app for a long time and this project was a great practice after learning Vue. Data is stored in Local Storage for this version, and I'd love to explore online options in future iterations. Many changes are made in the second iteration after sending this to a few friends for testing and daily use."],
        secondary: ["Vue", "Vuex","VueRouter", "TypeScript", "Scss/Sass", "Webpack", "UI/UX", "SPA"],
        phoneImgSrc: [XpensityV1LG1, XpensityV1LG2, XpensityV1LG3],
        desktopImgSrc: [],
        tabletImgSrc: [XpensityV1TabletMain, XpensityV1TabletSide],
        mobileFirst: true,
        githubLink: "https://github.com/lavaboy1738/xpensity-vue",
        liveLink: "https://xpensity-vue.netlify.app/",
        next: "agency"
    },
    {
        id: "agency",
        sequence: 4,
        title: "Agency",
        text: ["I had to do it. I just had to build a digital agency website. Prior to transitioning into web development and graduate school, I was trained in communications and previously worked in advertising agencies of various scales. From the smaller, modest creative agencies to 4A agencies, they all share something in common, that is, a stunning website with smooth animations and creative interactions.", "This project was built concurrently as I explored the framer motions library. I came across this motion library and I was immediately hooked by its functionalities and capabilities. It was a great venture to hone my react skills and create cool transitions. Link to the live version is listed above."],
        secondary: ["React", "TypeScript", "React Router", "Custom Hooks", "Framer Motion", "CSS in JS", "UI/UX"],
        phoneImgSrc:[AgencyLG1, AgencyLG2 ,AgencyLG3],
        desktopImgSrc: [AgencyLaptopMain, AgencyLaptopSide],
        tabletImgSrc: [AgencyTabletMain, AgencyTabletSide],
        mobileFirst: false,
        githubLink: "https://github.com/lavaboy1738/business-react",
        liveLink: "https://dotcom-react.netlify.app/",
        next: "lgn"
    },
    {
        id: "lgn",
        sequence: 5,
        title: "Lava Game Network",
        text: ["Asynchronous Javascript is certainly one of the most useful and powerful features. Fetching data and selectively displaying them is the foundation of the web. I wanted to build a project that utilizes async JS, Redux and play around with an open-source API, so I built this site that displays pictures and relevant information of new, popular, and upcoming games. It also comes with a search function that sends a request, fetches data and then dynamically renders the data on the page.", "The API used in this site is from rawg.io, a gaming website with all sorts of information about the latest and upcoming games across various platforms. It's a great API with a plethora of information, links to videos and photos to use. I was also able to further express my creativity in UI with framer motion and use a seamless transition."],
        secondary: ["React", "TypeScript", "Redux-Thunk", "Framer Motion", "Custom Hooks", "Transitions", "CSS in JS", "UX/UI", "API"],
        phoneImgSrc: [LGNLG1, LGNLG2, LGNLG3],
        desktopImgSrc: [LGNLaptopMain, LGNLaptopSide],
        tabletImgSrc: [LGNTabletMain, LGNTabletSide],
        mobileFirst: false,
        githubLink: "https://github.com/lavaboy1738/LGN",
        liveLink: "https://lgn-react.netlify.app/",
        next: "e-commerce"
    },
    {
        id: "e-commerce",
        sequence: 6,
        title: "E-Commerce",
        text: ["I build this project while learning React and Redux for the very first time. I found a course on Udemy made by Andrei Neagoie and Yihua Zhang, and this project was part of the course as I learned the basics of React, React Router, Redux, and many other things. ", "I did not build the website exactly how it was built in the course, because I wanted to integrate more features and make things look like an actual E-Commerce website. Pictures used in this project are all from a small boutique in the New England region called Kiel Patrick James. They sell nice bracelets. If you have time, I'd recommend you to checkout their website and look around. ", "Keep in mind that this project was built a while ago and I write much better code now. But I still want to put this up here since it's a substantial project. "],
        secondary: ["React", "Redux", "Firebase", "Stripe API", "Authentication", "Shopping Cart", "Scss/Sass", "UI/UX"],
        phoneImgSrc: [EConLG1, EConLG2, EConLG3],
        desktopImgSrc: [EConLaptopMain, EConLaptopSide],
        tabletImgSrc: [EConTabletMain, EConTabletSide],
        mobileFirst: false,
        githubLink: "https://github.com/lavaboy1738/new-england-clothing",
        liveLink: "https://new-england-clothing.netlify.app/",
        next: "lava-ui"
    },
    {
        id: "lava-ui",
        sequence: 7,
        title: "Lava UI",
        text: ["This is a UI library that I'm building with Vue. I feel like I spend quite a lot of time building things with React and Vue doesn't get as much of my attention and time. I'm still working on this thing so, please check back later if you're interested. You won't be disappointed. "],
        secondary: ["Vue", "Scss/Sass", "TypeScript", "UX/UI"],
        phoneImgSrc: [],
        desktopImgSrc: [],
        tabletImgSrc: [],
        mobileFirst: true,
        githubLink: "",
        liveLink: "",
        next: "xpensity-v2"
    }
]