import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Animations} from "../../animations";

const MainSectionStyles = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-end;
    @media (hover: none) and (pointer: coarse)   {
       justify-content: flex-start;
    }
    .content{
        width: 40%;
        @media (hover: none) and (pointer: coarse)   {
            width: 95%;
        }
        .title-wrapper{
            overflow: hidden;
            .title{
                font-size: calc(var(--VW) *3);
                position: relative;
                margin-bottom: 3vw;
                @media (hover: none) and (pointer: coarse)   {
                    font-size: calc(var(--VW) *8);
                    margin-bottom: 6vw;
                }
                .underline{
                    position: absolute;
                    width: 30%;
                    height: 0.3vw;
                    left: 0;
                    bottom: -1vw;
                    background-color: var(--black);
                }
            }
        }
        .links{
            text-align: right;
            margin-bottom: 2vw;
            @media (hover: none) and (pointer: coarse)   {
                margin-bottom: 4vw;
            }
            a{
                height: 100%;
                display: inline-block;
                margin: 0 0.5vw;
                .bx{
                    font-size: calc(var(--VW)*3);
                    pointer-events: none;
                    mix-blend-mode: difference;
                    color: var(--black);
                    background-color: var(--burlywood);
                    @media (hover: none) and (pointer: coarse)   {
                        font-size: calc(var(--VW) *8);
                    }
                }
            }
        }
        .text{
            margin-bottom: 3vw;
        }
    }
`

type Prop = {
    title: string,
    githubLink: string,
    liveLink: string,
    texts: string[]
}

const MainSection = (props: Prop)=>{
    const {title, githubLink, liveLink, texts} = props;
    const {transition, textReveal, opacityReveal} = Animations();
    return (
        <MainSectionStyles data-scroll-section>
            <div className="content">
                <div className="title-wrapper">
                    <motion.h1 variants={textReveal} initial="initial"
                    animate="animate"
                    transition={{...transition, duration:2, delay: 3.4}}
                    className="title">{title}
                        <span className="underline"></span>
                    </motion.h1>
                </div>
                <motion.div 
                variants={opacityReveal} initial="initial"
                animate="animate"
                transition={{...transition, duration:2, delay: 3.6}}
                className="links">
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        <i className='bx bx-link-external'></i>
                    </a>
                </motion.div>
                {
                    texts.map((text,index) =>{
                        return(
                            <motion.p 
                            variants={opacityReveal} initial="initial"
                            animate="animate"
                            transition={{...transition, duration:2, delay: 3.8}}
                            className="text" key={index}>{text}</motion.p>
                        )
                    })
                }
            </div>
        </MainSectionStyles>
    )
}

export {MainSection}