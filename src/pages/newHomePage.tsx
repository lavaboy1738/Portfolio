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
    &-contact{
        text-align: right;
        a{
            font-size: 12vw;
            height: 9vw;
            line-height: 9vw;
            position: relative;
            top: 0.5vw;
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: 0.14vw var(--black);
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
        a{
            margin-right: 3vw;
            font-size: 6.5vw;
            line-height: 5vw;
            height: 5vw;
            span{
                pointer-events: none;
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
    &-pic{
        height: 100%;
        width: 24%;
    }
    &-description{
        margin-left: 2vw;
        width: 20%;
        height: 100%;
        display: flex;
        align-items: flex-end;
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
        .wrapper{
            h1{
                font-size: 11vw;
            }
            h2{
                font-weight: 200;
                font-size: 2vw;
                word-spacing: 0.5vw;
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
.mask{
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--black);
    z-index: 2
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
        initial={{visibility: "hidden"}}
        animate={{visibility: "visible"}}
        exit={{visibility: "hidden", transition:{delay: 2.4}}}
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
                        <h1 className="last">Feng</h1>
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
                    <a href="mailto: ronnie@ronniefeng.com">Reach Me</a>
                </div>
            </div>
        </NewHomePageStyles>
        <Panels/>
        </>
    )
}

export {NewHomePage}