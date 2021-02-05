import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import hoverEffect from "hover-effect";
import Ronnie from "../assets/images/homepage/profile.jpg";
import Ronnie2 from "../assets/images/homepage/profile2.jpeg";
import DisplacementImg from "../assets/images/homepage/glass.jpg";
import {motion} from "framer-motion";
import {Panels} from "../components/panels";

const HomepageStyles = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 2vw;
    .left{
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
            a{
                margin-right: 3vw;
                font-family: Grotesk;
                font-weight: 400;
                font-size: calc(var(--VW)*1.5);
            }
        }
    }
    .right{
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-top{
            text-align: right;
            h1{
                font-size:calc(var(--VW)*13);
                line-height: calc(var(--VW)*11);
                height: calc(var(--VW)*11);
                text-transform: uppercase;
            }
        }
        &-descriptions{
            display: none;
        }
        &-bottom{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            margin-top: 10vh;
            margin-bottom: -1.5vh;
            .link-wrapper{
                overflow: hidden;
                :nth-child(1){
                    text-align: right;
                    padding-right: 5vw;
                }
                :nth-child(2){
                    text-align: right;
                }
                :nth-child(3){
                    text-align: right;
                    padding-right: 10vw;
                }
                a{
                    font-size:calc(var(--VW)*7);
                    line-height: calc(var(--VW)*6);
                    height: calc(var(--VW)*6);
                    position: relative;
                    -webkit-text-fill-color: var(--burlywood);
                    -webkit-text-stroke: calc(var(--VW)*0.14) var(--black);
                    .dot{
                        display: inline-block;
                        width: 2vw;
                        height: 2vw;
                        border: calc(var(--VW)*0.14) solid var(--black);
                        position: relative;
                        top: -25%;
                    }
                }
            }
        }
    }
`

const Home = ()=>{
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

    return(
        <HomepageStyles>
            <div className="left">
                <div className="left-top">
                    <div className="pic" ref={profile}></div>
                    <div className="descriptions">
                        <p>Award-winning interactive developer striving to craft memorable experiences on the digital canvas. Front-end addicted, Fullstack capable. Currently located in Toronto, Canada.</p>
                    </div>
                </div>
                <div className="left-bottom">
                        <a href="/">Li</a>
                        <a href="/">Gh</a>
                </div>
            </div>
            <div className="right">
                <div className="right-top">
                    <h1>Ronnie</h1>
                    <h1>Feng</h1>
                </div>
                <div className="right-descriptions">
                    <p>Award-winning interactive developer striving to craft memorable experiences on the digital canvas. Front-end addicted, Fullstack capable. Currently located in Toronto, Canada.</p>
                </div>
                <div className="right-bottom">
                    <div className="link-wrapper">
                        <Link to="works"><span className="dot"/> Works</Link>
                    </div>
                    <div className="link-wrapper">
                        <Link to="about"><span className="dot"/> About</Link>
                    </div>
                    <div className="link-wrapper">
                        <a href="mailto:ronnie@ronniefeng.com"><span className="dot"/> Contact</a>
                    </div>
                </div>
            </div>
        </HomepageStyles>
    )
}

export {Home}