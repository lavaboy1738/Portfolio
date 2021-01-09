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
    border: 0.1vw solid var(--black);
    mix-blend-mode: difference;
    z-index: 10;
`

const PointerStyles =styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.2vw;
    height: 0.2vw;
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
            x: `calc(${x}px - 50%)`,
            y: `calc(${y}px - 50%)`,
            scale: hoverNav? 1.8: 1,
            opacity: hoverNav? 1 : 0.7,
            backgroundColor: hoverNav? "#f6c9a0" : "transparent"
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