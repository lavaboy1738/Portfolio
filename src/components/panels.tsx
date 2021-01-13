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
pointer-events: none;
    .left, .right{
        height: 100vh;
        width: 50vw;
        position: absolute;
        z-index: 11;
        background-color: var(--black);
    }

    .left{
        left: 0;
    }

    .right{
        right: 0;
    }
`

const Panels = ()=>{
    const {transition} = Animations();
    return (
        <PanelStyles key="panels">
            <motion.div 
            initial={{height: 0}}
            animate={{height: [window.innerHeight, 0], top: [0, window.innerHeight]}}
            exit={{height: [0,window.innerHeight], top: [0, 0]}}
            transition={{...transition, duration: 2.5, times: [0, 1]}}
            className="left"></motion.div>
            <motion.div 
            initial={{height: 0}}
            animate={{height: [window.innerHeight, 0], top: [0, 0]}}
            exit={{height: [0, window.innerHeight], top: [window.innerHeight, 0]}}
            transition={{...transition, duration: 2.5, times: [0, 1]}}
            className="right"></motion.div>
        </PanelStyles>
    )
}

export {Panels};