import React from "react";
import styled from "styled-components";
import {useMousePosition} from "../hooks/useMousePosition";
import {motion} from "framer-motion";

const CursorStyles = styled(motion.div)`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: calc(var(--VW) *0.36);
    height: calc(var(--VW) *0.36);
    padding: calc(var(--VW) *1.5);
    border-radius: 100%;
    background-color: var(--black);
    opacity: 0.3;
    border: calc(var(--VW) *0.1) solid var(--black);
    mix-blend-mode: difference;
    z-index: 10;
`

const PointerStyles =styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: calc(var(--VW) *0.5);
    height: calc(var(--VW) *0.5);
    border-radius: 100%;
    background-color: var(--black);
    transform: translate(-50%, -50%);
    z-index: 10;
    &.on-focus {
        background-color: transparent;
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
            opacity: hoverNav? 1 : 0.1,
            border: hoverNav? "0.1vw solid #0f0e0e" : "none",
            backgroundColor: hoverNav? "#f6c9a0" : "#0f0e0e"
        }}
        transition= {{ease: "linear", duration: 0.2}}
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