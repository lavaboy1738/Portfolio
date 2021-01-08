import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const HomepageStyles = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    .indicator{
        width: 25%;
        height: 100%;
        h1{
            font-weight: 600;
            font-size: 18vw;
            letter-spacing: -0.7vw;
            writing-mode: vertical-rl;
            height: 100%;
            text-align: center;
            position: relative;
            left: -20%;
        }
    }
    .content-wrapper{
        width: 75%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10vw;
        .content{
            width: 80%;
            h3{
                font-weight: 200;
                font-size: 2vw;
                color: var(--grey);
                word-spacing: 0.2vw;
            }
            h1{
                font-weight: 800;
                font-size: 6vw;
                position: relative;
                left: -0.5%;
            }
            h2{
                font-weight: 600;
                font-size: 4vw;
                position: relative;
                left: -0.3%;
                margin-bottom: 1.8vw;
                color: var(--grey);
            }
            p{
                width: 75%;
                font-weight: 200;
                font-size: 1.2vw;
                margin-bottom: 2vw;
                span{
                    text-decoration: line-through;
                    color: var(--grey);
                }
            }
            a{
                font-size: 1.3vw;
                font-weight: 400;
                span{
                    font-size: 1.6vw;
                    margin-left: 0.2vw;
                    transition: 0.3s all ease;
                }
                &:hover{
                    span{
                        margin-left: 1vw;
                        transition: 0.3s all ease;
                    }
                }
            }
        }
    }
`

const Homepage = ()=>{
    return (
        <HomepageStyles>
            <div className="indicator">
                <h1>hello</h1>
            </div>
            <div className="content-wrapper">
                <div className="content">
                    <h3>Hi there, my name is,</h3>
                    <h1>Ronnie Feng.</h1>
                    <h2>I build things for the web.</h2>
                    <p>I'm an interactive developer based in <span>&nbsp;Boston, MA </span>&nbsp;Toronto, ON specializing in 
                    designing and crafting memorable experiences in the digital landscape. Front-End addicted, Fullstack capable.</p>
                    <Link to="/works">See My Works <span>&rarr;</span></Link>
                </div>
            </div>
        </HomepageStyles>
    )
}

export {Homepage}