import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import hoverEffect from "hover-effect";
import Ronnie from "../assets/images/homepage/profile.jpg";
import Ronnie2 from "../assets/images/homepage/profile2.jpeg";
import DisplacementImg from "../assets/images/homepage/glass.jpg";
import {motion} from "framer-motion";
import {Panels} from "../components/panels";

const NewHomePageStyles = styled(motion.div)`
width: 100vw;
height: 100vh;
display: flex;
flex-wrap: wrap;
padding-right: 3vw;
align-items: space-between;

.top{
    width: 100%;
    height: 45%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-evenly;
    justify-content: flex-end;
    @media (hover: none) and (pointer: coarse)   {
        height: 40%;
        padding-bottom: 10vh;
    }
    &-contact{
        text-align: right;
        a{
            font-size: calc(var(--VW) *12);
            height: 9vw;
            line-height: 9vw;
            position: relative;
            top: 0.5vw;
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: 0.14vw var(--black);
            @media (hover: none) and (pointer: coarse)   {
                font-size: calc(var(--VW) *12.5);
                height: 10vw;
                line-height: 10vw;
            }
            &:hover{
                -webkit-text-fill-color: var(--black);
                -webkit-text-stroke: 0.14vw var(--burlywood);
            }
        }
    }
    &-nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        margin-right: -3vw;
        padding-right: 0.15vw;
        @media (hover: none) and (pointer: coarse)   {
            flex-wrap: wrap;
        }
        a{
            margin-right: 3vw;
            font-size: calc(var(--VW) *6.5);
            line-height: 5vw;
            height: 5vw;
            @media (hover: none) and (pointer: coarse)   {
                font-size: calc(var(--VW) *10);
                line-height: 9vw;
                height: 9vw;
            }
        }
        .dot{
            width: 1.8vw;
            margin-right: 3vw;
            height: 1.8vw;
            background-color: var(--black);
        }
    }
}
.bottom{
    width: 100%;
    height: 55%;
    display: flex;
    flex-wrap: nowrap;
    @media (hover: none) and (pointer: coarse)   {
        height: 60%;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        justify-content: space-evenly;
    }
    &-pic{
        height: 100%;
        width: 24%;
        overflow: hidden;
        @media (hover: none) and (pointer: coarse)   {
            display: none;
        }
    }
    &-description{
        margin-left: 2vw;
        width: 20%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        @media (hover: none) and (pointer: coarse)   {
            width: 50%;
            height: unset;
        }
        @media (hover: none) and (pointer: coarse) and (max-width: 500px){
            width: 75%;
            height: unset;
        }
        p{
            position: relative;
            bottom: -0.35vw;
        }
    }
    &-name{
        flex-grow: 1;
        text-align: right;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        @media (hover: none) and (pointer: coarse)   {
            flex-grow: unset;
        }
        .wrapper{
            h1{
                font-size: calc(var(--VW)*11);
                @media (hover: none) and (pointer: coarse)   {
                    font-size: calc(var(--VW)*18);
                }
            }
            h2{
                font-weight: 200;
                font-size: calc(var(--VW)*2);
                word-spacing: 0.5vw;
                @media (hover: none) and (pointer: coarse)   {
                    font-size: calc(var(--VW)*3.5);
                }
            }
            .last{
                margin-top: -3vw;
                margin-bottom: 1vw;
                -webkit-text-fill-color: var(--burlywood);
                -webkit-text-stroke: 0.14vw var(--black);
            }
            .locations{
                top: -1vw;
                word-spacing: 0.22vw;
            }
        }
    }
}
`

const NewHomePage = ()=>{
    const profile = useRef(null);
    useEffect(()=>{
            new hoverEffect({
                parent: profile.current,
                intensity: 1.4,
                image1: Ronnie2,
                image2: Ronnie,
                displacementImage: DisplacementImg
            })
    });

    return (
        <>
        <Panels/>
        <NewHomePageStyles
            initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
        key="home"
        >
            <div className="bottom">
                <div className="bottom-pic" ref={profile}></div>
                <div className="bottom-description">
                    <p>An interactive developer (also occasionally a designer) striving to craft memorable experiences on the digital canvas. Front-End addicted, Fullstack capable.</p>
                </div>
                <div className="bottom-name">
                    <div 
                    className="wrapper">
                        <h1 className="first">Ronnie</h1>
                        <motion.h1 
                        initial={{WebkitTextStrokeColor: "#0f0e0e", WebkitTextFillColor: "#0f0e0e"}}
                        animate={{WebkitTextStrokeColor: "#0f0e0e", WebkitTextFillColor: "#fac9a0"}}
                        className="last">Feng</motion.h1>
                        <h2 className="locations">Based in Toronto, Canada.</h2>
                    </div>
                </div>
            </div>
            <div className="top">
                <div className="top-nav">
                    <Link to="/works">Works</Link>
                    <div className="dot"></div>
                    <Link to="/about">About Me</Link>
                    <div className="dot"></div>
                </div>
                <div className="top-contact">
                    <motion.a 
                    initial={{WebkitTextStrokeColor: "#0f0e0e", WebkitTextFillColor: "#0f0e0e"}}
                    animate={{WebkitTextStrokeColor: "#0f0e0e", WebkitTextFillColor: "#fac9a0"}}
                    whileHover={{WebkitTextStrokeColor:"#fac9a0", WebkitTextFillColor: "#0f0e0e", transition:{duration: 0}}}
                    href="mailto: ronnie@ronniefeng.com">Reach Me</motion.a>
                </div>
            </div>
        </NewHomePageStyles>
        </>
    )
}

export {NewHomePage}