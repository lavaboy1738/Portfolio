import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useMousePosition} from "../hooks/useMousePosition";

const CursorStyles = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 0.3rem;
    height: 0.3rem;
    padding: 1rem;
    border-radius: 100%;
    border: 1px solid black;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-out;
`

const PointerStyles =styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 100%;
    background-color: black;
    transform: translate(-50%, -50%);
`


const Cursor = ()=>{
    const {x, y} = useMousePosition();
    return (
        <>
        <CursorStyles
        style={{
            top: y,
            left: x
        }}
        />
        <PointerStyles 
        style={{
            top: y,
            left: x
        }}
        />
        </>
    )
}

export {Cursor}