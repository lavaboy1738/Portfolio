import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import hoverEffect from "hover-effect";
import Ronnie from "../assets/images/homepage/profile.jpg";
import Ronnie2 from "../assets/images/homepage/profile2.jpeg";
import DisplacementImg from "../assets/images/homepage/heightMap.png";
import {motion} from "framer-motion";
import {Panels} from "../components/panels";

const NewHomePageStyles = styled(motion.div)`
width: 100vw;
height: 100vh;
display: flex;
flex-wrap: wrap;
padding-right: calc(var(--VW) *3);
align-items: space-between;

.top{
    width: 100%;
    height: 45%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-evenly;
    justify-content: flex-end;
    &-contact{
        text-align: right;
        a{
            font-size: calc(var(--VW) *12);
            height: calc(var(--VW) *9);
            line-height: calc(var(--VW) *9);
            position: relative;
            top: calc(var(--VW) *0.5);
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: calc(var(--VW) *0.14) var(--black);
            &:hover{
                -webkit-text-fill-color: var(--black);
                -webkit-text-stroke: calc(var(--VW) *0.14) var(--burlywood);
            }
        }
    }
    &-nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        margin-right: calc(var(--VW) *-3 );
        padding-right: calc(var(--VW) *0.15);
        a{
            margin-right: calc(var(--VW) *3);
            font-size: calc(var(--VW) *6.5);
            line-height: calc(var(--VW) *5);
            height: calc(var(--VW) *5);
            span{
                pointer-events: none;
            }
        }
        .dot{
            width: calc(var(--VW) *1.8);
            margin-right: calc(var(--VW) *3);
            height: calc(var(--VW) *1.8);
            background-color: var(--black);
        }
    }
}
.bottom{
    width: 100%;
    height: 55%;
    display: flex;
    flex-wrap: nowrap;
    &-pic{
        height: 100%;
        width: 24%;
    }
    &-description{
        margin-left: calc(var(--VW) *2);
        width: 20%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        p{
            position: relative;
            bottom: calc(var(--VW) *-0.35);
        }
    }
    &-name{
        flex-grow: 1;
        text-align: right;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        .wrapper{
            h1{
                font-size: calc(var(--VW)*11);
            }
            h2{
                font-weight: 200;
                font-size: calc(var(--VW) *2);
                word-spacing: calc(var(--VW) *0.5);
            }
            .last{
                margin-top: calc(var(--VW) *-3);
                margin-bottom: calc(var(--VW));
                -webkit-text-fill-color: var(--burlywood);
                -webkit-text-stroke: calc(var(--VW) *0.14) var(--black);
            }
            .locations{
                top: calc(var(--VW) *-1);
                word-spacing: calc(var(--VW) *0.22);
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
        <NewHomePageStyles
            initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 1.4, times: [0, 0.99, 1]}}}
        key="home"
        >
            <div className="bottom">
                <div className="bottom-pic" ref={profile}></div>
                <div className="bottom-description">
                    <p>An interactive developer (also occassionally a designer) striving to craft memorable experiences on the digital canvas. Front-End addicted, Fullstack capable.</p>
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
                    <Link to="/about">About <span>Me</span></Link>
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
        <Panels/>
        </>
    )
}

export {NewHomePage}