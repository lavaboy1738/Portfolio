import React from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {WorksItem} from "../components/worksItem";
import {WorksList} from "../data/worksList";
import {motion} from "framer-motion";
import {Panels} from "../components/panels";
import {Animations} from "../animations";

const WorksStyles = styled(motion.div)`
    width: calc(var(--VW)*100);
    height: 100vh;
    padding: calc(var(--VW)*6) calc(var(--VW)*4);
    display: flex;
    .title-wrapper{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
        padding: 0 calc(var(--VW)*2);
        display: flex;
        justify-content: center;
        align-items: center;
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
            <WorksStyles
            initial={{backgroundColor: "#0f0e0e", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 1.4, times: [0, 0.99, 1]}}}
            key="works"
            >
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
            <Panels/>
        </>
    )
}

export {Works}