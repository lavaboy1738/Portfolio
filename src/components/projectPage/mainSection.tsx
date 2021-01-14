import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Animations} from "../../animations";

const MainSectionStyles = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-end;
    .content{
        width: 40%;
        .title-wrapper{
            overflow: hidden;
            .title{
                font-size: calc(var(--VW) *3);
                position: relative;
                margin-bottom: 3vw;
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
            a{
                height: 100%;
                display: inline-block;
                margin: 0 0.5vw;
                .bx{
                    font-size: 3vw;
                    pointer-events: none;
                    mix-blend-mode: difference;
                    color: var(--black);
                    background-color: var(--burlywood);
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
    const {transition, textReveal} = Animations();
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
                <div className="links">
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        <i className='bx bx-link-external'></i>
                    </a>
                </div>
                {
                    texts.map((text,index) =>{
                        return(
                            <p className="text" key={index}>{text}</p>
                        )
                    })
                }
            </div>
        </MainSectionStyles>
    )
}

export {MainSection}