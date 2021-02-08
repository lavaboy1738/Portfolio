import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import hoverEffect from "hover-effect";
import Ronnie from "../assets/images/homepage/profile.webp";
import Ronnie2 from "../assets/images/homepage/profile2.webp";
import DisplacementImg from "../assets/images/homepage/glass.webp";
import {Animations} from "../animations";
import {motion} from "framer-motion";
import {Panels} from "../components/panels";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

//fontawesome
library.add(fab);

const HomepageStyles = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 2vw;
    @media (hover: none) and (pointer: coarse){
        padding: 10vh 5vw;
    }
    .left{
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            display: none;
        }
        &-top{
            .pic{
                height: 50vh;
                overflow: hidden;
            }
            .descriptions{
                margin-top: 3vh;
            }
        }
        &-bottom{
            overflow: hidden;
            a{
                margin-right: 3vw;
                display: inline-block;
                svg{
                    pointer-events: none;
                    width: 2.5vw;
                    height: 2.5vw;
                    mix-blend-mode: normal;
                    color: var(--black);
                    background-color: var(--burlywood);
                    &:hover{
                        color: var(--burlywood);
                        background-color:var(--black);
                    }
                }
            }
        }
    }
    .right{
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
        }
        &-top{
            text-align: right;
            .name-wrapper{
                overflow: hidden;
                h1{
                    font-size:calc(var(--VW)*13);
                    line-height: calc(var(--VW)*11);
                    height: calc(var(--VW)*11);
                    text-transform: uppercase;
                    -webkit-text-fill-color: var(--burlywood);
                    -webkit-text-stroke: calc(var(--VW)*0.14) var(--black);
                    @media (hover: none) and (pointer: coarse){
                        font-size:calc(var(--VW)*17);
                        line-height: calc(var(--VW)*16);
                        height: calc(var(--VW)*16);
                    }
                }
            }
        }
        &-descriptions{
            display: none;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                display: block;
                width: 55%;
                margin: 5vh 0;
            }
            @media (max-width: 500px){
                width: 90%;
            }
        }
        &-bottom{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            margin-top: 10vh;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-top: 0;
                margin-bottom: 5vh;
            }
            .link-container{
                overflow: hidden;
                text-align: right;
                :nth-child(1){
                    padding-right: 5vw;
                    @media (hover: none) and (pointer: coarse), (max-width: 500px){
                        padding-right: 0;
                    }
                }
                :nth-child(3){
                    padding-right: 10vw;
                    @media (hover: none) and (pointer: coarse), (max-width: 500px){
                        padding-right: 0;
                    }
                }
                .link-wrapper{
                    a{
                        display: inline-block;
                        font-size:calc(var(--VW)*7);
                        line-height: calc(var(--VW)*6);
                        height: calc(var(--VW)*6);
                        @media (hover: none) and (pointer: coarse), (max-width: 500px){
                            font-size:calc(var(--VW)*12);
                            line-height: calc(var(--VW)*11);
                            height: calc(var(--VW)*11);
                        }
                        .number{
                            pointer-events: none;
                            font-size:calc(var(--VW)*3);
                        }
                    }
                }
            }
        }
    }
`

const Home = ()=>{
    const profile = useRef(null);
    const {transition, textReveal, opacityReveal} = Animations();
    useEffect(()=>{
            new hoverEffect({
                parent: profile.current,
                intensity: 1.4,
                image1: Ronnie2,
                image2: Ronnie,
                displacementImage: DisplacementImg
            })
    });

    return(
        <>
        <Panels/>
        <HomepageStyles
        initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
        animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
        exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
        >
            <div className="left">
                <div className="left-top">
                    <div className="pic" ref={profile}></div>
                    <div className="descriptions">
                        <motion.p
                        variants={opacityReveal} initial="initial"
                        animate="animate"
                        transition={{...transition, duration:1, delay: 4}}
                        >Award-winning interactive developer striving to craft memorable experiences on the digital canvas. Front-end addicted, Fullstack capable. Currently located in Toronto, Canada.</motion.p>
                    </div>
                </div>
                <div className="left-bottom">
                    <motion.a 
                    variants={opacityReveal} initial="initial"
                    animate="animate"
                    transition={{...transition, duration:1, delay: 5.5}}
                    href="https://www.linkedin.com/in/ronniefeng/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </motion.a>
                    <motion.a 
                    variants={opacityReveal} initial="initial"
                    animate="animate"
                    transition={{...transition, duration:1, delay: 5.7}}
                    href="https://github.com/lavaboy1738" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </motion.a>
                </div>
            </div>
            <div className="right">
                <div className="right-top">
                    <div className="name-wrapper">
                    <motion.h1
                    variants={textReveal} initial="initial"
                        animate="animate"
                        transition={{...transition, duration:0.8, delay: 3.5}}
                    >Ronnie</motion.h1>
                    </div>
                    <div className="name-wrapper">
                    <motion.h1
                    variants={textReveal} initial="initial"
                        animate="animate"
                        transition={{...transition, duration:0.8, delay: 3.8}}
                    >Feng</motion.h1>
                    </div>
                </div>
                <div className="right-descriptions">
                    <motion.p
                    variants={opacityReveal} initial="initial"
                    animate="animate"
                    transition={{...transition, duration:1, delay: 4}}
                    >Award-winning interactive developer striving to craft memorable experiences on the digital canvas. Front-end addicted, Fullstack capable. Currently located in Toronto, Canada.</motion.p>
                </div>
                <div className="right-bottom">
                    <motion.div className="link-container">
                        <motion.div className="link-wrapper"
                        variants={textReveal} initial="initial" animate="animate" transition= {{...transition, duration: 1, delay: 4.3}}
                        >
                            <Link to="works"><span className="number">01.</span>Works</Link>
                        </motion.div>
                    </motion.div>
                    <motion.div className="link-container">
                        <motion.div className="link-wrapper"
                        variants={textReveal} initial="initial" animate="animate" transition= {{...transition, duration: 1, delay: 4.5}}
                        >
                            <Link to="about"><span className="number">02.</span>About</Link>
                        </motion.div>
                    </motion.div>
                    <motion.div className="link-container">
                        <motion.div className="link-wrapper"
                        variants={textReveal} initial="initial" animate="animate" transition= {{...transition, duration: 1, delay: 4.7}}
                        >
                            <a href="mailto:ronnie@ronniefeng.com"><span className="number">03.</span>Contact</a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </HomepageStyles>
        </>
    )
}

export {Home}