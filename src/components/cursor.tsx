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
    z-index: 10;
`

const PointerStyles =styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.3vw;
    height: 0.3vw;
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
        }}
        transition= {{ease: "linear"}}
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