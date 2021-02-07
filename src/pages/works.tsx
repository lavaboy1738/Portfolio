import React from "react";
import styled, { keyframes } from "styled-components";
import {Nav} from "../components/nav";
import {WorksItem} from "../components/worksItem";
import {WorksList} from "../data/worksList";
import {motion} from "framer-motion";
import {Panels} from "../components/panels";
import {Animations} from "../animations";

const coverReveal = keyframes`
    from {
        left: 0;
    }
    to {
        left: -120%;
    }
`

const WorksStyles = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    padding: 6vw 4vw;
    display: flex;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        padding: 6vw 10vw;
    }
    .cover{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: transparent;
        z-index: 9;
        animation: ${coverReveal} 0.01s linear 6.5s forwards;
    }
    .title-wrapper{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            display: none;
        }
        .title{
            .word-wrapper{
                overflow: hidden;
                :nth-child(2){
                    position: relative;
                    left: 15%;
                }
                .word{
                    font-size: calc(var(--VW)*3.6);
                    text-transform: uppercase;
                }
            }
        }
    }
    .content{
        width: 70%;
        height: 100%;
        padding: 0 2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
            padding: 5vh 0 10vh 0;
        }
        .works-list{
            width: 100%;
            height: 100%;
            display: flex;
            align-content: space-between;
            flex-wrap: wrap;
        }
    }
`

const Works = ()=>{
    const {parent,textReveal, transition, worksTitleParent} = Animations();
    return (
        <>
            <Nav/>
            <Panels/>
            <WorksStyles
            initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
            >
                <div className="cover"></div>
                <div className="title-wrapper">
                    <motion.div 
                    variants={worksTitleParent}
                    initial="initial"
                    animate="animate"
                    className="title">
                        <motion.h1 className="word-wrapper">
                            <motion.div
                            variants={textReveal}
                            transition={transition}
                            className="word">Blood,</motion.div>
                        </motion.h1>
                        <motion.h1 className="word-wrapper">
                            <motion.div
                            variants={textReveal}
                            transition={transition}
                            className="word">Sweat,</motion.div>
                        </motion.h1>
                        <motion.h1 className="word-wrapper">
                            <motion.div
                            variants={textReveal}
                            transition={transition}
                            className="word">and ideas.</motion.div>
                        </motion.h1>
                    </motion.div>
                </div>
                <div className="content">
                    <motion.ul 
                    variants={parent}
                    initial="initial"
                    animate="animate"
                    className="works-list">
                        {
                            WorksList.map((data)=>{
                                return(
                                    <WorksItem data={data} key={data.id} />
                                )
                            })
                        }
                    </motion.ul>
                </div>
            </WorksStyles>
        </>
    )
}

export {Works}