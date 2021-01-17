import React from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {useScroll} from "../hooks/useScroll";
import {useParams } from "react-router-dom";
import {MainSection} from "../components/projectPage/mainSection";
import {SecondarySection} from "../components/projectPage/secondarySection";
import {PhoneSection} from "../components/projectPage/phoneSection";
import {DesktopSection} from "../components/projectPage/desktopSection";
import {TabletSection} from "../components/projectPage/tabletSection";
import {ProjectFooter} from "../components/projectPage/projectFooter";
import {useData} from "../hooks/useData";
import{motion} from "framer-motion";
import {Panels} from "../components/panels";
import {Animations} from "../animations";

const ProjectStyles  = styled(motion.div)`
padding: 6vw 5vw;
padding-right: 6vw;
.number{
    display: flex;
    justify-content: flex-start;
    position: relative;
    left: -26%;
    overflow: hidden;
    margin: 5vw 0;
    @media (hover: none) and (pointer: coarse) and (min-width: 500px){
        left: -38%;
        width: 120%;
        margin: 15vw 0;
    }
    &-wrapper{
        overflow: hidden;
        h1{
            font-size: calc(var(--VW)*40);
            line-height: 33vw;
            height: 33vw;
            position: relative;
            bottom: -10%;
            @media (hover: none) and (pointer: coarse) and (min-width: 500px){
                font-size:calc(var(--VW)*60);
                line-height: 50vw;
                height: 50vw;
            }
        }
    }
}
`

type Params = {
    projectID:string
}

const Project = ()=>{
    const {scrollRef} = useScroll();
    const {projectID} = useParams<Params>();
    const {getData} = useData();
    const {textReveal, transition} = Animations();

    const {title, 
        sequence, 
        text, 
        secondary, 
        phoneImgSrc, 
        desktopImgSrc, 
        tabletImgSrc, 
        mobileFirst, 
        githubLink, 
        liveLink, 
        next} = getData(projectID);

    return (
        <>
        <Nav/>
        <Panels/>
        <ProjectStyles 
            initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
        key="project"
        ref={scrollRef} data-scroll-container>
            <div data-scroll-section className="number">
                <div className="number-wrapper">
                    <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, duration: 2, delay: 3}}>0</motion.h1>
                </div>
                <div className="number-wrapper">
                    <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, duration: 2, delay: 3.2}}>{sequence}</motion.h1>
                </div>
            </div>
            <MainSection title={title} texts={text} githubLink = {githubLink} liveLink={liveLink} />
            <SecondarySection secondary={secondary} />
            {
                mobileFirst && desktopImgSrc.length > 0 && phoneImgSrc.length > 0 &&
                <>
                    <PhoneSection phoneImgSrc={phoneImgSrc} />
                    <DesktopSection desktopImgSrc={desktopImgSrc} />
                </>
            }
            {
                mobileFirst && desktopImgSrc.length===0 && phoneImgSrc.length > 0 &&
                <PhoneSection phoneImgSrc={phoneImgSrc} />
            }
            {
                !mobileFirst && phoneImgSrc.length>0 &&
                <>
                    <DesktopSection desktopImgSrc={desktopImgSrc} />
                    <PhoneSection phoneImgSrc={phoneImgSrc} />
                </>
            }
            {
                tabletImgSrc.length>0 &&
                <TabletSection tabletImgSrc={tabletImgSrc} />
            }
            <ProjectFooter next={next} />
        </ProjectStyles>
        </>
    )
}

export {Project}