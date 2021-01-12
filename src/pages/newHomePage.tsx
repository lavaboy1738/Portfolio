import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import hoverEffect from "hover-effect";
import Ronnie from "../assets/images/homepage/profile.jpg";
import Ronnie2 from "../assets/images/homepage/profile2.jpeg";
import DisplacementImg from "../assets/images/homepage/heightMap.png";

const NewHomePageStyles = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-wrap: wrap;
padding-right: 3vw;
align-items: space-between;

.top{
    width: 100%;
    height: 40%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-around;
    justify-content: flex-end;
    &-contact{
        text-align: right;
        a{
            font-size: 10vw;
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
        font-weight: 600;
        font-size: 6vw;
        text-transform: uppercase;
        word-spacing: 1.2vw;
        padding-right: 0.2vw;
        a{
            margin: 0 3vw;
            span{
                pointer-events: none;
            }
        }
        .dot{
            width: 1.8vw;
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
        width: 24vw;
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
        justify-content: space-between;
        .wrapper{
            h1{
                font-weight: 800;
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
                position: relative;
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
        <NewHomePageStyles>
            <div className="bottom">
                <div className="bottom-pic" ref={profile}></div>
                <div className="bottom-description">
                    <p>An interactive developer striving to craft memorable experiences on the digital canvas. Front-End addicted, Fullstack capable.</p>
                </div>
                <div className="bottom-name">
                    <div className="wrapper">
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
    )
}

export {NewHomePage}