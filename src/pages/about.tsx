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
        }
    }
    .main{
        margin: 20vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
        &-pic{
            width: 25vw;
            height: 30vw;
            margin-right: 5vw;
            text-align: center;
            overflow: hidden;
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
    .split{
        margin: 5vh 0;
        h1{
            text-transform: uppercase;
            font-size: calc(var(--VW)*3);
        }
    }
    .info{
        margin-bottom: 20vh;
        display: flex;
        justify-content: space-between;
        &-main{
            width: 45%;
            h2{
                font-size: calc(var(--VW)*2);
            }
            p{
                margin-bottom: 3vw;
                :last-child{
                    margin-bottom: 0;
                }
            }
        }
        &-credits{
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            h1{
                font-size: calc(var(--VW)*4);
            }
            h2{
                font-size: calc(var(--VW)*2);
                margin: 0.5vw 0;
                :last-child{
                    margin-bottom: 0;
                }
            }
            p{
                margin-bottom: 3vw;
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
            <AboutStyles 
            initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 1.4, times: [0, 0.99, 1]}}}
            key="about"
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
                        <p>For whatever reason that brought you to my portfolio, welcome. I hope you enjoyed browsing this site as much as I enjoyed building it. First, please allow me to introduce myself. </p>
                        <p>I'm currently a graduate student at the University of Toronto. Prior to that, I completed my bachelor's degree at Boston University studying communications and American Studies. I worked in advertising for a bit and loved everything about it. I was very fortunate to participate in a few projects that served some notable clients, including <a href="https://www.dunkindonuts.com/en" target="_blank" rel="noreferrer">Dunkin Donuts</a>, <a href="https://www.nhl.com/bruins" target="_blank" rel="noreferrer">Boston Bruins</a>, <a href="https://www.partycity.ca/en.html" target="_blank" rel="noreferrer">Party City</a>, and <a href="https://fostergrant.com/" target="_blank" rel="noreferrer">Foster Grant</a>.</p>
                        <p>I was introduced to coding in the fall of 2019 when I took a graduate python course at school. Soon after, I made the decision to transition into software development. Web, as a platform, allows me to harness on my experience in advertising and stretch my creative muscles. After about 10 months of grinding and teaching myself, I completed this website. No bootcamp, no CS degree, no days off, but the drive to achieve nothing less than excellence.</p>
                        <p>In my spare time, I follow a number of boxers in the lower weight divisions. I've been a fervent fan of boxing for years. Gotta love the sweet science.</p>
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
                        <p>Although I designed and built this portfolio myself, I have to credit a few places from where I drew my inspirations. </p>
                        <h2><a href="https://romainavalle.com/" target="_blank" rel="noreferrer">Romain Avalle</a></h2>
                        <h2><a href="https://loerarchitecten.com/en/" target="_blank" rel="noreferrer">Loer Architecten</a></h2>
                        <h2><a href="https://www.clockstrikestwelve.com/" target="_blank" rel="noreferrer">ClockStrikesTwelve</a></h2>
                        <h2><a href="https://pitchfork.com/reviews/albums/jay-z-444/" target="_blank" rel="noreferrer">Jay-Z's 4:44</a></h2>
                        <h2><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noreferrer">Rick Astley</a></h2>
                        <h2><a href="https://www.loftgarten.co/" target="_blank" rel="noreferrer">Loftgarten</a></h2>
                    </div>
                </div>
                <div data-scroll-section  className="contact">
                    <h1>Got Some Ideas?</h1>
                    <a href="mailto: ronnie@ronniefeng.com">Let's Talk.</a>
                </div>
            </AboutStyles>
            <Panels/>
        </>
    )
}

export {About}