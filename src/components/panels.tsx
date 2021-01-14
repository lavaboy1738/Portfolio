import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Animations} from "../animations";

const PanelStyles = styled(motion.div)`
position: absolute;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
z-index: 11;
pointer-events: none;
    .left, .right{
        height: 100vh;
        width: 50vw;
        position: absolute;
        z-index: 12;
        background-color: var(--black);
    }

    .left{
        left: 0;
    }

    .right{
        right: 0;
    }
    .message{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--burlywood);
        font-size:calc(var(--VW) *2);
        z-index: 13;
    }
`

const generateMessage = ()=>{
    const messages = ["Hold On...",
    "Just a sec...",
    "Any minute now...",
    "Loading...",
    "It's coming...",
    "One moment...",
    "Almost there...",
    "Hang on...", 
    "Easy does it..."]
    const randomNum = Math.floor(Math.random()*messages.length)
    return messages[randomNum]
}

const Panels = ()=>{
    const {transition} = Animations();
    return (
        <PanelStyles>
            <motion.div 
            initial={{height: 0}}
            animate={{height: [window.innerHeight, window.innerHeight, 0, 0], 
                top: [0,0, window.innerHeight,window.innerHeight], transition: {...transition, duration: 3.5, times: [0, 0.6, 0.99, 1]}}}
            exit={{height: [0,0, window.innerHeight, window.innerHeight], top: [0, 0, 0, 0], transition: {...transition, duration: 1.5, times: [0, 0,1, 0.9, 1]}}}
            // transition={{...transition, duration: 2.5, times: [0, 0,2, 0.8, 1]}}
            className="left"></motion.div>
            <motion.div 
            initial={{height: 0}}
            animate={{height: [window.innerHeight, window.innerHeight, 0, 0], top: [0, 0, 0, 0], transition: {...transition, duration: 3.5, times: [0, 0.6, 0.99, 1]}}}
            exit={{height: [0,0, window.innerHeight, window.innerHeight], 
                top: [window.innerHeight, window.innerHeight,0, 0], transition: {...transition, duration: 1.5, times: [0, 0,1, 0.9, 1]}}}
            // transition={{...transition, duration: 2.5, times: [0, 0.2, 0.8, 1]}}
            className="right"></motion.div>
            <motion.h2 
            initial={{opacity: 0, display: "block", top: "60%", left: "50%", x:"-50%", y:"-50%"}}
            animate={{
                top: ["70%", "50%", "50%", "30%", "40%"],
                left: "50%",
                x: "-50%",
                y:"-50%", 
                opacity: [0, 1, 1, 0, 0],
                transition: {...transition, duration: 2.1, times: [0, 0.5, 0.5, 0.99, 1]}
        }}
            exit={{display: "none", opacity: 0, transition:{duration: 0.01}}}
            className="message">{generateMessage()}</motion.h2>
        </PanelStyles>
    )
}

export {Panels};