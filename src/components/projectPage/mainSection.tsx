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
                font-size: 3vw;
                position: relative;
                margin-bottom: 2vw;
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
                margin-left: 1vw;
                height: 100%;
                display: inline-block;
                svg{
                    width: 3vw;
                    height: 3vw;
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"></path></svg>
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path></svg>
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