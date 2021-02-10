import React from "react";
import styled from "styled-components";
import {useMousePosition} from "../hooks/useMousePosition";
import {motion} from "framer-motion";

const CursorStyles = styled(motion.div)`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.36vw;
    height: 0.36vw;
    padding: 1.5vw;
    border-radius: 100%;
    background-color: var(--black);
    border: 0.1vw solid var(--black);
    mix-blend-mode: difference;
    z-index: 20;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        display: none;
    }
`

const PointerStyles =styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.6vw;
    height: 0.6vw;
    border-radius: 100%;
    background-color: var(--black);
    transform: translate(-50%, -50%);
    z-index: 20;
    &.on-focus {
        background-color: transparent;
    }
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        display: none;
    }
`


const Cursor = ()=>{
    const {x, y, hoverNav} = useMousePosition();

    return (
        <>
        <CursorStyles
        animate={{
            top: y,
            left: x,
            x: "-50%",
            y: "-50%",
            scale: hoverNav? 1.8: 1,
            opacity: hoverNav? 1 : 0.15,
            border: hoverNav? "0.1vw solid #0f0e0e" : "none",
            backgroundColor: hoverNav? "#f6c9a0" : "#0f0e0e",
        }}
        transition= {{ease: "linear", duration: 0.15}}
        />
        <PointerStyles 
        className={hoverNav? "on-focus" : ""}
        style={{
            top: y,
            left: x
        }}
        />
        </>
    )
}

export {Cursor}