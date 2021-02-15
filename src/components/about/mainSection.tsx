import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import hoverEffect from "hover-effect";
import Ronnie from "../../assets/images/homepage/profile.webp";
import Ronnie2 from "../../assets/images/homepage/profile2.webp";
import HeatMap from "../../assets/images/homepage/heightMap.webp";

const MainSectionStyles = styled.div`
    margin: 20vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .main-pic{
        width: 25vw;
        height: 30vw;
        margin-right: 5vw;
        text-align: center;
        overflow: hidden;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
            width: 50vw;
            height: 55vw;
        }
    }
    .main-text{
        width: 45%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        p{
            margin: 3vw 0;
            mix-blend-mode: normal;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin: 5vw 0;
            }
            a{
                font-family:   Grotesk;
                text-transform: none;
                mix-blend-mode: normal;
            }
        }
    }
`

const MainSection = ()=>{
    const profileRef = useRef(null);
    useEffect(()=>{
        new hoverEffect({
            parent: profileRef.current,
            intensity: 1.4,
            image1: Ronnie2,
            image2: Ronnie,
            displacementImage: HeatMap
        })
    });
    return(
        <MainSectionStyles data-scroll-section className="main">
            <div data-scroll data-scroll-speed="6" className="main-pic" ref={profileRef}></div>
            <div className="main-text">
                <p>For whatever reason that brought you to my portfolio, welcome. I hope you enjoyed browsing this site as much as I enjoyed building it. First off, please allow me to introduce myself.</p>
                <p>I'm currently a graduate student at the University of Toronto. Prior to that, I completed my bachelor's degree at Boston University studying communications and American Studies. I worked in advertising for a bit and loved everything about it. Working in a creative agency setting taught me how to manage expectations between clients and the team, and I was very fortunate to participate in a few projects that served some notable clients, including <a href="https://www.dunkindonuts.com/en" target="_blank" rel="noreferrer">Dunkin Donuts</a>, <a href="https://www.nhl.com/bruins" target="_blank" rel="noreferrer">Boston Bruins</a>, <a href="https://www.partycity.ca/en.html" target="_blank" rel="noreferrer">Party City</a>, and <a href="https://fostergrant.com/" target="_blank" rel="noreferrer">Foster Grant</a>.</p>
                <p>As a web developer, I strive to craft memorable experiences on the digital canvas. With people’s attention span steadily dropping in 2021, more than ever, companies and brands are using websites as a platform to build their online presence. I’m committed to creating refined digital solutions and interactive experiences that help businesses to succeed in the increasingly crowded digital landscape. </p>
                <p>As a professional, I can bridge the gap between development and client management. Having experiences on both sides, I deeply understand the disconnect that often occurs between two parties. Ultimately, clients need digital solutions to solve their business problems, and I can be a great asset to help navigate the balance between creativity and practicality. </p>
                <p>In my spare time, I follow a number of boxers in the lower weight divisions. I've been a fervent fan of boxing for years.</p>
            </div>
        </MainSectionStyles>
    )
}

export {MainSection}