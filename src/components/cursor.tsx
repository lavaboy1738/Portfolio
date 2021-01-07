import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useMousePosition} from "../hooks/useMousePosition";

const CursorStyles = styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.36vw;
    height: 0.36vw;
    padding: 1.2vw;
    border-radius: 100%;
    border: 1px solid var(--black);
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-out;
    &.on-focus {
        border: 1px solid var(--black);
        padding: 2.4vw;
    }
`

const PointerStyles =styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.36vw;
    height: 0.36vw;
    border-radius: 100%;
    background-color: black;
    transform: translate(-50%, -50%);
    &.on-focus {
        background-color: transparent;
    }
`


const Cursor = ()=>{
    const {x, y, hoverNav} = useMousePosition();

    return (
        <>
        <CursorStyles
        style={{
            top: y,
            left: x
        }}
        className={hoverNav? "on-focus" : ""}
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