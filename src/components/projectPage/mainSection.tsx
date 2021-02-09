import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Animations} from "../../animations";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

//fontawesome
library.add(fab, faExternalLinkSquareAlt);

const MainSectionStyles = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-end;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
       justify-content: flex-start;
    }
    .content{
        width: 40%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        .title-wrapper{
            overflow: hidden;
            .title{
                font-size: calc(var(--VW) *3);
                position: relative;
                margin-bottom: 3vw;
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
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
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 4vw;
            }
            a{
                height: 100%;
                display: inline-block;
                margin: 0 0.5vw;
                @media (hover: none) and (pointer: coarse), (max-width: 500px){
                    margin: 0 2vw;
                }
                svg{
                    width: 3.5vw;
                    height: 3.5vw;
                    pointer-events: none;
                    mix-blend-mode: normal;
                    color: var(--black);
                    background-color: var(--burlywood);
                    @media (hover: none) and (pointer: coarse) and (min-width: 500px){
                        width: 8vw;
                        height: 8vw;
                        mix-blend-mode: unset;
                    }
                    @media (max-width: 500px){
                        width: 12vw;
                        height: 12vw;
                        mix-blend-mode: unset;
                    }
                }
            }
        }
        .text{
            margin-bottom: 3vw;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 5vw;
            }
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
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fas", "external-link-square-alt"]} />
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