import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {useScroll} from "../hooks/useScroll";
import hoverEffect from "hover-effect";
import Ronnie from "../assets/images/homepage/profile.jpg";
import Ronnie2 from "../assets/images/homepage/profile2.jpeg";
import HeatMap from "../assets/images/homepage/heightMap.png";
import {motion} from "framer-motion";
import {Panels} from "../components/panels";
import {Animations} from "../animations";

const AboutStyles = styled(motion.div)`
    padding: 0 4vw;
    padding-bottom: 6vw;
    .big-text{
        height:100vh;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        margin-bottom: 10vh;
        .container{
            overflow: hidden;
            width: 100%;
            :nth-child(2){
                text-align: right;
            }
            :nth-child(3){
                    padding-left: 15vw;
            }
            h1{
                text-transform: uppercase;
                font-size: calc(var(--VW)*11);
                line-height: 10vw;
                height: 10vw;
                overflow: hidden;
            }
        }
    }
    .hello{
        h1{
            font-size: calc(var(--VW)*3);
            text-align: center;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .name{
        margin: 10vh 0 20vh 0;
        h1{
            font-size: calc(var(--VW)*16);
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
            font-size: calc(var(--VW)*3);
            text-align: center;
            z-index: 5;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .main{
        margin: 20vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            flex-wrap: wrap;
            justify-content: flex-start;
        }
        &-pic{
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
        &-text{
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
    }
    .split{
        margin: 5vh 0;
        h1{
            text-transform: uppercase;
            font-size: calc(var(--VW)*3);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*5);
            }
        }
    }
    .info{
        margin-bottom: 20vh;
        margin-right: 5vw;
        display: flex;
        justify-content: space-between;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            flex-wrap: wrap;
        }
        &-main{
            width: 48%;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                width: 95%;
            }
            h2{
                font-size: calc(var(--VW)*2);
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    font-size: calc(var(--VW)*4);
                }
            }
            p{
                margin-bottom: 3vw;
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    margin-bottom: 5vw;
                }
                :last-child{
                    margin-bottom: 0;
                }
            }
        }
        &-credits{
            width: 35%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                width: 85%;
                margin-top: 10vh;
            }
            h1{
                font-size: calc(var(--VW)*4);
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    font-size: calc(var(--VW)*6);
                }
            }
            h2{
                font-size: calc(var(--VW)*2);
                margin: 0.5vw 0;
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    font-size: calc(var(--VW)*4);
                }
                :last-child{
                    margin-bottom: 0;
                }
            }
            p{
                margin-bottom: 3vw;
                :nth-child(2){
                    margin-bottom: 1vw;
                    margin-top: 0.5vw;
                }
            }
        }
    }
    .contact{
        text-align: right;
        h1{
            font-size: calc(var(--VW)*6);
            text-transform: uppercase;
        }
        a{
            font-size: calc(var(--VW)*10);
            text-transform: uppercase;
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: 0.14vw var(--black);
            &:hover{
                -webkit-text-fill-color: var(--black);
                -webkit-text-stroke: 0.14vw var(--burlywood);
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

    const {transition, textReveal} = Animations();
    return (
        <>
            <Nav/>
            <Panels/>
            <AboutStyles 
            initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
            ref={scrollRef} data-scroll-container >
                <div 
                data-scroll-section className="big-text">
                    <div className="container">
                        <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 3}}>Slicker</motion.h1>
                    </div>
                    <div className="container">
                        <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 3.2}}>than your</motion.h1>
                    </div>
                    <div className="container">
                        <motion.h1 variants={textReveal} initial="initial" animate="animate"  transition= {{...transition, delay: 3.4}}>average</motion.h1>
                    </div>
                    <div className="container">
                        <motion.h1 variants={textReveal} initial="initial" animate="animate"  transition= {{...transition, delay: 3.6}}>web dev.</motion.h1>
                    </div>
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
                        <p>For whatever reason that brought you to my portfolio, welcome. I hope you enjoyed browsing this site as much as I enjoyed building it. First, please allow me to introduce myself.</p>
                        <p>I'm currently a graduate student at the University of Toronto. Prior to that, I completed my bachelor's degree at Boston University studying communications and American Studies. I worked in advertising for a bit and loved everything about it. Working in a creative agency setting taught me how to manage expectations between clients and the team, and I was very fortunate to participate in a few projects that served some notable clients, including <a href="https://www.dunkindonuts.com/en" target="_blank" rel="noreferrer">Dunkin Donuts</a>, <a href="https://www.nhl.com/bruins" target="_blank" rel="noreferrer">Boston Bruins</a>, <a href="https://www.partycity.ca/en.html" target="_blank" rel="noreferrer">Party City</a>, and <a href="https://fostergrant.com/" target="_blank" rel="noreferrer">Foster Grant</a>.</p>
                        <p>As a web developer, I strive to craft memorable experiences on the digital canvas. With people’s attention span steadily dropping, a website is the perfect platform for brands and individuals to build their online presence. However, you only get one chance to impress the viewer, and I’m committed to creating refined digital solutions that help businesses to succeed in the increasingly crowded current digital landscape. </p>
                        <p>As a professional, I can bridge the gap between development and client management. Having experiences on both sides, I deeply understand the disconnect that often occurs between two parties. Ultimately, clients need digital solutions to solve their business problems, and I can be a great asset on a team to help navigate the balance between creativity and practicality. </p>
                        <p>In my spare time, I follow a number of boxers in the lower weight divisions. I've been a fervent fan of boxing for years.</p>
                    </div>
                </div>
                <div data-scroll-section className="split">
                    <h1>Front-End Addicted</h1>
                    <h1>Fullstack Capable.</h1>
                </div>
                <div data-scroll-section  className="info">
                    <div className="info-main">
                        <h2>Languages</h2>
                        <p>TypeScript, JavaScript(ES6+), HTML, CSS/Scss/Sass, Python, SQL</p>
                        <h2>Frameworks/Libraries/Others</h2>
                        <p>React.js, Vue.js, Firebase, Framer Motion, GSAP, Styled Components, Webpack, Git, Command Line, Babel, NPM, PWA, Node.js</p>
                        <h2>UI/UX</h2>
                        <p>Responsive Design, Prototyping, Wireframing, Figma, Adobe Xd, Interview, Survey, Usability Testing</p>
                        <h2>Learning</h2>
                        <p>Node.js, Gatsby.js, Java</p>
                        <h2>Other Skills</h2>
                        <p>CPR/AED, American Sign Language, Mandarin, Content Creation, Media Management</p>
                        <h2>Volunteer/Organizations</h2>
                        <p>Lambda Chi Alpha, Special Olympics, Feeding America</p>
                        <h2>Education</h2>
                        <p>Master of Information <br/>Information Systems <br/>University of Toronto Exp. June 2021</p>
                        <p>Bachelor of Science <br/>Communications, American Studies <br/>Boston University May 2018</p>
                    </div>
                    <div className="info-credits">
                        <h1>Credits</h1>
                        <p>I developed this website with React.js. Animations are powered by Framer Motion.</p>
                        <p>Huge thanks to the following sites/individuals for design and layout inspirations.</p>
                        <h2><a href="https://pitchfork.com/reviews/albums/jay-z-444/" target="_blank" rel="noreferrer">Jay-Z's 4:44</a></h2>
                        <h2><a href="https://romainavalle.com/" target="_blank" rel="noreferrer">Romain Avalle</a></h2>
                        <h2><a href="https://loerarchitecten.com/en/" target="_blank" rel="noreferrer">Loer Architecten</a></h2>
                        <h2><a href="https://www.clockstrikestwelve.com/" target="_blank" rel="noreferrer">ClockStrikesTwelve</a></h2>
                        <h2><a href="https://www.behance.net/martiniidesign" rel="noreferrer" target="_blank">Stefan Martinovic</a></h2>
                        <h2><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noreferrer">Rick Astley</a></h2>
                        <h2><a href="https://www.loftgarten.co/" target="_blank" rel="noreferrer">Loftgarten</a></h2>
                    </div>
                </div>
                <div data-scroll-section  className="contact">
                    <h1>Got Some Ideas?</h1>
                    <a href="mailto: ronnie@ronniefeng.com">Let's Talk.</a>
                </div>
            </AboutStyles>
        </>
    )
}

export {About}