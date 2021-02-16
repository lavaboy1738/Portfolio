import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const MarqueeStyles = styled.div`
    position: relative;
    left: -10vw;
    .left, .right{
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        span{
            position: relative;
            display: inline-block;
            font-family: Monument;
            font-weight: 100;
            font-size: calc(var(--VW)*8);
            text-transform: uppercase;
            padding-right: 2vw;
        }
    }
    .left{
        span{
            border-top: 0.5vw solid var(--black);
            border-bottom: 0.5vw solid var(--black);
        }
    }
    .right{
        span{
            border-bottom: 0.5vw solid var(--black);
        }
    }
`

const DetailsStyles = styled.div`
    margin: 10vh 0 20vh 0;
    width: 100%;
    padding-right: 5vw;
    display: flex;
    justify-content: flex-end;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
         margin-bottom: 10vh;
    }
    .container{
        width: 50%;
        display: flex;
        justify-content: space-between;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
        }
        p{
            margin: 3vw 0;
            font-size: calc(var(--VW)*2);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*4.5);
            }
        }
    }
`

const Recognitions = ()=>{
    const travelDistance = 85.7;
    return(
        <>
        <MarqueeStyles data-scroll-section>
            <div className="left"
            >
                <motion.span
                            initial={{left: 0}}
                            animate={{left: `-${travelDistance}%`}}
                            transition={{ease:"linear", duration: 12, repeat: Infinity}}
                >Recognitions</motion.span>
                <motion.span
                            initial={{left: 0}}
                            animate={{left: `-${travelDistance}%`}}
                            transition={{ease:"linear", duration: 12, repeat: Infinity}}
                >Recognitions</motion.span>
                <motion.span
                            initial={{left: 0}}
                            animate={{left: `-${travelDistance}%`}}
                            transition={{ease:"linear", duration:12, repeat: Infinity}}
                >Recognitions</motion.span>
                                <motion.span
                            initial={{left: 0}}
                            animate={{left: `-${travelDistance}%`}}
                            transition={{ease:"linear", duration:12, repeat: Infinity}}
                >Recognitions</motion.span>
            </div>
            <div className="right">
                <motion.span
                            initial={{right: `${travelDistance}%`}}
                            animate={{right: 0}}
                            transition={{ease:"linear", duration: 12, repeat: Infinity}}
                >Recognitions</motion.span>
                <motion.span
                            initial={{right: `${travelDistance}%`}}
                            animate={{right: 0}}
                            transition={{ease:"linear", duration: 12, repeat: Infinity}}
                >Recognitions</motion.span>
                <motion.span
                            initial={{right: `${travelDistance}%`}}
                            animate={{right: 0}}
                            transition={{ease:"linear", duration:12, repeat: Infinity}}
                >Recognitions</motion.span>
                                <motion.span
                            initial={{right: `${travelDistance}%`}}
                            animate={{right: 0}}
                            transition={{ease:"linear", duration:12, repeat: Infinity}}
                >Recognitions</motion.span>
            </div>
        </MarqueeStyles>
        <DetailsStyles data-scroll-section>
            <div className="container">
                <div className="container-left">
                    <p>CSSDA - Special Kudos, Avg. 7.9</p>
                    <p>CSS Winner - SOTD</p>
                    <p>CSSDA - UI Award</p>
                    <p>CSSDA - UX Award</p>
                    <p>CSSDA - Innovation Award</p>
                </div>
                <div className="container-right">
                    <p>Feb 2020</p>
                    <p>Feb 2020</p>
                    <p>Feb 2020</p>
                    <p>Feb 2020</p>
                    <p>Feb 2020</p>
                </div>
            </div>
        </DetailsStyles>
        </>
    )
}

export{Recognitions}