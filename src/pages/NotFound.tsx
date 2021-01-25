import React from "react";
import styled from "styled-components";
import {Panels} from "../components/panels";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const NotFoundStyles = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        text-align: center;
        h1, h2{
            display: block;
            margin: 1vh 0;
        }
        h1{
            font-size: calc(var(--VW)*20);
        }
        h2{
            font-size: calc(var(--VW)*5);
            a{
                text-decoration: underline;
            }
        }
    }
`

const NotFound = ()=>{
    return (
        <>
        <Panels/>
        <NotFoundStyles
        initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
        animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
        exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
        >
            <div className="content">
                <h1>404</h1>
                <h2>You're lost kid, <Link to="/">go home</Link></h2>
            </div>
        </NotFoundStyles>
        </>
    )
}

export {NotFound}