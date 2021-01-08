import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import hoverEffect from "hover-effect";
import Ronnie from "../assets/images/profile.jpg";
import Ronnie2 from "../assets/images/profile2.jpeg";
import DisplacementImg from "../assets/images/heightMap.png";

const NewHomePageStyles = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-wrap: wrap;
padding-right: 3vw;
.top{
    width: 100%;
    height: 40%;
    &-contact{
        text-align: right;
        a{
            font-weight: 800;
            font-size: 10vw;
            text-transform: uppercase;
            word-spacing: 2vw;
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: 0.14vw var(--black);
            &:hover{
                -webkit-text-fill-color: var(--black);
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
        letter-spacing: -0.2vw;
        a{
            margin: 0 5vw;
            &:hover{
                -webkit-text-fill-color: var(--burlywood);
                -webkit-text-stroke: 0.14vw var(--black);
            }
        }
        .dot{
            width: 1.8vw;
            height: 1.8vw;
            border-radius: 100%;
            background-color: var(--black);
            transform: translateY(15%);
        }
    }
}
.bottom{
    width: 100%;
    height: 60%;
    display: flex;
    flex-wrap: nowrap;
    &-pic{
        height: 100%;
        width: 60vh;
    }
    &-description{
        margin-left: 2vw;
        width: 20%;
    }
    &-name{
        flex-grow: 1;
        text-align: right;
        h1{
            font-weight: 800;
            font-size: 11vw;
            letter-spacing: -0.5vw;
        }
        h2{
            font-weight: 200;
            font-size: 2vw;
            word-spacing: 0.5vw;
            letter-spacing: -0.1vw;
        }
        .last{
            margin-top: -3vw;
            margin-bottom: 1vw;
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: 0.14vw var(--black);
        }
        .locations{
            span{
                text-decoration: line-through;
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
            <div className="top">
                <div className="top-contact">
                    <a href="mailto: ronnie@ronniefeng.com">Reach Me</a>
                </div>
                <div className="top-nav">
                    <Link to="/about">About Me</Link>
                    <div className="dot"></div>
                    <Link to="/about">Works</Link>
                    <div className="dot"></div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-pic" ref={profile}></div>
                <div className="bottom-description">
                    <p>An interactive developer striving to craft memorable experiences on the digital landscape.</p>
                </div>
                <div className="bottom-name">
                    <h1 className="first">Ronnie</h1>
                    <h1 className="last">Feng</h1>
                    <h2 className="locations">Based in <span>&nbsp;Boston&nbsp;</span> Toronto</h2>
                </div>
            </div>
        </NewHomePageStyles>
    )
}

export {NewHomePage}