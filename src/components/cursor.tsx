import React from "react";
import styled from "styled-components";
import {useMousePosition} from "../hooks/useMousePosition";

const CursorStyles = styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.36vw;
    height: 0.36vw;
    padding: 1.5vw;
    border-radius: 100%;
    border: 0.1vw solid var(--black);
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-out;
    opacity: 0.6;
    z-index: 10;
    &.on-focus {
        border: 0.1vw solid var(--black);
        padding: 3vw;
        opacity: 1;
    }
`

const PointerStyles =styled.div`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.3vw;
    height: 0.3vw;
    border-radius: 100%;
    background-color: black;
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