import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useMousePosition} from "../hooks/useMousePosition";
import {WorksListItem} from "../data/worksList";
import {motion} from "framer-motion";
import{Animations} from "../animations";

const WorksItemStyles = styled.li`
    width: 100%;
    position: relative;
    a{
        height: 100%;
        .wrapper{
            height: 100%;
            display: flex;
            align-items: flex-end;
            pointer-events: none;
            .title{
                margin: 0 1vw;
                h2{
                    overflow: hidden;
                    .text{
                        font-size:3.5vw;
                    }
                }
            }
            .thumbnail{
                overflow: hidden;
                position: absolute;
                height: 100%;
                width: 7vw;
                bottom: 1.1vw;
                .mask{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    z-index: 9;
                    background-color: var(--burlywood);
                }
                img{
                    position: absolute;
                    height: 100%;
                    width: auto;
                    right: 0;
                    display: block;
                }
            }
            .floating-image{
                pointer-events: none;
                height: 15vw;
                width: auto;
                position: absolute;
                z-index: 10;
                overflow: hidden;
                opacity: 0;
                img{
                    height: 100%;
                    width: auto;
                    display: block;
                }
            }
            .line{
                height: 0.1vw;
                width: 100%;
                background-color: var(--black);
                position: relative;
                display: flex;
                align-items: center;
                bottom: 1vw;
                &.flex-0{
                    flex: 0;
                    &::after{
                        display: none;
                    }
                }
                &.flex-1{
                    flex: 1;
                }
                &.flex-2{
                    flex: 2;
                }
                &.flex-3{
                    flex: 3;
                }
                &::after{
                    content: "";
                    position: absolute;
                    height: 0.5vw;
                    width: 0.5vw;
                    border-radius: 100%;
                    background-color: var(--black);
                }
                &.left{
                    &::after{
                        right: 0;
                    }
                }
                .mask{
                    width: 100%;
                    height: 0.6vw;
                    z-index: 9;
                    position: absolute;
                    background-color: var(--burlywood);
                }
            }
        }
    }
`
type Prop = {
    data: WorksListItem
}

const WorksItem = (props: Prop)=>{
    const {title, src, leftFlex, rightFlex, thumbnailOffset, offsetX, offsetY, id} = props.data;
    const {x,y} = useMousePosition();
    const [listPosition, setListPosition] = useState({ top: 0, left: 0})
    const [hovered, setHovered] = useState(false);
    const listRef = useRef<HTMLLIElement>(null);
    const{transition, maskAnimation, textReveal} = Animations();

    useEffect(()=>{
        if(listRef.current){
            setListPosition({
                top: listRef.current.getBoundingClientRect().top,
                left: listRef.current.getBoundingClientRect().left
            })
        }
    }, [hovered] )

    return(
        <WorksItemStyles ref={listRef} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <Link to={`/works/${id}`}>
                <div className="wrapper">
                    <div className={`line left flex-${leftFlex}`}>
                        <motion.div 
                        variants={maskAnimation}
                        transition={{...transition, duration: 1, times:[0, 0.01, 1]}}
                        className="mask"></motion.div>
                    </div>
                    <motion.div className="title">
                        <h2>
                            <motion.div 
                            variants={textReveal}
                            transition={transition}
                            className="text">
                            {title}
                            </motion.div>
                        </h2>
                    </motion.div>
                    <motion.div className="thumbnail"
                    style={{left: thumbnailOffset}}
                    >
                        <img src={src} alt=""/>
                        <motion.div 
                        variants={maskAnimation}
                        transition={{...transition, duration: 1,times:[0, 0.01, 1]}}
                        className="mask"></motion.div>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{
                        opacity: hovered? 1 : 0,
                        x: `calc(${x-listPosition.left}px - ${offsetX}vw)`,
                        y: `calc(${y-listPosition.top}px - ${offsetY}vw)`
                    }}
                    transition={{ease: "linear", duration: 0.2}}
                    className="floating-image">
                        <img src={src} alt=""/>
                    </motion.div>
                    <motion.div 
                    variants={maskAnimation}
                    transition={{...transition, duration: 1, times:[0, 0.01, 1]}}
                    className={`line right flex-${rightFlex}`}>
                        <motion.div 
                        variants={maskAnimation}
                        transition={{...transition, duration: 1, times:[0, 0.01, 1]}}
                        className="mask right"></motion.div>
                    </motion.div>
                </div>
            </Link>
        </WorksItemStyles>
    )
}

export {WorksItem}