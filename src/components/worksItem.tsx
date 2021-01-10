import React, { useRef, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useMousePosition} from "../hooks/useMousePosition";
import {WorksListItem} from "../data/worksList";
import { title } from "process";

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
                h2{
                    font-size:3.5vw;
                    overflow: hidden;
                }
            }
            .thumbnail{
                overflow: hidden;
                position: absolute;
                border: 1px solid red;
                height: 100%;
                width: 7vw;
                bottom: 1vw;
                left: 50%;
                .mask{

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
                width: 20vh;
                position: absolute;
                z-index: 10;
                overflow: hidden;
                opacity: 0.1;
                img{
                    width: 100%;
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

                }
            }
        }
    }
`
type Prop = {
    data: WorksListItem
}

const WorksItem = (props: Prop)=>{
    const {title, src, leftFlex, rightFlex, thumbnailOffset} = props.data;
    const {hoverNav} = useMousePosition();
    const [listPosition, setListPosition] = useState({ top: 0, left: 0})
    const listRef = useRef(null);

    return(
        <WorksItemStyles ref={listRef}>
            <Link to="/">
                <div className="wrapper">
                    <div className={`line left flex-${leftFlex}`}>
                        <div className="mask"></div>
                    </div>
                    <div className="title">
                        <h2 className="text">{title}</h2>
                    </div>
                    <div className="thumbnail"
                    style={{left: thumbnailOffset}}
                    >
                        <img src={src} alt=""/>
                        <div className="mask"></div>
                    </div>
                    <div className="floating-image">
                        <img src={src} alt=""/>
                    </div>
                    <div className={`line right flex-${rightFlex}`}>
                        <div className="mask right"></div>
                    </div>
                </div>
            </Link>
        </WorksItemStyles>
    )
}

export {WorksItem}