import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {useScroll} from "../hooks/useScroll";
import hoverEffect from "hover-effect";
import Ronnie from "../assets/images/homepage/profile.jpg";
import Ronnie2 from "../assets/images/homepage/profile2.jpeg";
import HeatMap from "../assets/images/homepage/heightMap.png";

const AboutStyles = styled.div`
    padding: 0 4vw;
    .big-text{
        height:100vh;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        margin-bottom: 10vh;
        h1{
            text-transform: uppercase;
            font-size: 11vw;
            line-height: 9vw;
            height: 9vw;
            overflow: hidden;
            :nth-child(2){
                flex-grow: 1;
                text-align: right;
            }
            :nth-child(3){
                padding-left: 15vw;
            }
        }
    }
    .hello{
        h1{
            font-size: 3vw;
            text-align: center;
        }
    }
    .name{
        margin: 10vh 0 20vh 0;
        h1{
            font-size: 16vw;
            line-height: 10vw;
            height: 10vw;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 0.1vw var(--black);
            text-transform: uppercase;
            :nth-child(3){
                text-align: right;
            }
        }
        h3{
            font-size: 3vw;
            text-align: center;
            z-index: 5;
        }
    }
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        &-pic{
            width: 25vw;
            height: 30vw;
            margin-right: 5vw;
            text-align: center;
        }
        &-text{
            width: 40%;
            p{
                margin: 3vw 0;
                a{
                    font-family: Jakarta;
                    text-transform: none;
                    mix-blend-mode: difference;
                }
            }
        }
    }
`

const About = ()=>{
    const {scrollRef} = useScroll();
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
    return (
        <>
            <Nav/>
            <AboutStyles ref={scrollRef} data-scroll-container >
                <div data-scroll-section className="big-text">
                    <h1>Slicker</h1>
                    <h1>Than Your</h1>
                    <h1>Average</h1>
                    <h1>Web Dev</h1>
                </div>
                <div data-scroll-section  className="hello">
                    <h1  data-scroll data-scroll-speed="-8" data-scroll-direction="horizontal">Hi, my name is</h1>
                </div>
                <div data-scroll-section className="name">
                    <h1 data-scroll data-scroll-speed="0.5">Ronnie</h1>
                    <h3 data-scroll data-scroll-speed="6">Web Developer</h3>
                    <h1 data-scroll data-scroll-speed="0.5">Feng</h1>
                </div>
                <div data-scroll-section className="main">
                    <div data-scroll data-scroll-speed="6" className="main-pic" ref={profileRef}></div>
                    <div className="main-text">
                        <p>For whatever reason that brought you to my portfolio, welcome. I hope you enjoyed browsing this site as much as I enjoyed building it. First, please allow me to introduce myself. </p>
                        <p>I'm currently a graduate student at the University of Toronto. Prior to that, I completed my bachelor's degree at Boston University studying communications and American Studies. I worked in advertising for a bit and loved everything about it. I was very fortunate to participate in a few projects that served some notable clients, including <a href="https://www.dunkindonuts.com/en" target="_blank" rel="noreferrer">Dunkin Donuts</a>, <a href="https://www.nhl.com/bruins" target="_blank" rel="noreferrer">Boston Bruins</a>, <a href="https://www.partycity.ca/en.html" target="_blank" rel="noreferrer">Party City</a>, and <a href="https://fostergrant.com/" target="_blank" rel="noreferrer">Foster Grant</a>.</p>
                        <p>I was introduced to coding in the fall of 2019 when I took a graduate python course at school. Soon after, I made the decision to transition into software development. Web, as a platform, allows me to harness on my experience in advertising and stretch my creative muscles. After about 10 months of grinding and teaching myself, I completed this website. No bootcamp, no CS degree, but the drive to achieve nothing less than excellence. No days off, I'm serious. </p>
                        <p>In my spare time, I follow a number of boxers in the lower weight divisions. I've been a fervent fan of boxing for years. Gotta love the sweet science.</p>
                    </div>
                </div>

            </AboutStyles>
        </>
    )
}

export {About}