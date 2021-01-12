import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation, useParams } from "react-router-dom";
import {MainSection} from "../components/projectPage/mainSection";
import {SecondarySection} from "../components/projectPage/secondarySection";
import {PhoneSection} from "../components/projectPage/phoneSection";
import {DesktopSection} from "../components/projectPage/desktopSection";
import {TabletSection} from "../components/projectPage/tabletSection";
import {ProjectFooter} from "../components/projectPage/projectFooter";
import {useData} from "../hooks/useData";

const ProjectStyles  = styled.div`
padding: 6vw 5vw;
padding-right: 6vw;
.number{
    font-size: 40vw;
    position: relative;
    left: -26%;
    margin-bottom: -4vw;
    overflow: hidden;
}
`

type Params = {
    projectID:string
}

const Project = ()=>{
    const scrollRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const {projectID} = useParams<Params>();
    const {getData} = useData();

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

    useEffect(()=>{
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smartphone:{
                smooth: true,
            },
            tablet: {
                smooth: true
            }
        })
        setTimeout(()=>scroll.update(), 300);
        return ()=>{
            if(scroll) scroll.destroy();
        }
    }, [location])

    return (
        <>
        <Nav/>
        <ProjectStyles ref={scrollRef} data-scroll-container>
            <h1 data-scroll-section className="number">
                <span>0</span>
                <span>{sequence}</span>
            </h1>
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