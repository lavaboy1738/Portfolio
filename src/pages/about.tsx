import React from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {useScroll} from "../hooks/useScroll";


const AboutStyles = styled.div`
    padding: 6vw 4vw;
    .big-text{
        height:100vh;
        h1{
            text-transform: uppercase;
            font-size: 11vw;
            line-height: 9vw;
            height: 9vw;
            overflow: hidden;
            :nth-child(2){
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
`

const About = ()=>{
    const {scrollRef} = useScroll();
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
                    <div className="main-pic"></div>
                    <div className="main-text">
                        <p></p>
                    </div>
                </div>

            </AboutStyles>
        </>
    )
}

export {About}