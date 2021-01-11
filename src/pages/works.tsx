import React from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {WorksItem} from "../components/worksItem";
import {WorksList} from "../data/worksList";

const WorksStyles = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 6vw 4vw;
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
                    font-size: 3.6vw;
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
    return (
        <>
            <Nav/>
            <WorksStyles>
                <div className="title-wrapper">
                    <div className="title">
                        <div className="word-wrapper">
                            <h1 className="word">Blood,</h1>
                        </div>
                        <div className="word-wrapper">
                            <h1 className="word">Sweat,</h1>
                        </div>
                        <div className="word-wrapper">
                            <h1 className="word">and ideas.</h1>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <ul className="works-list">
                        {
                            WorksList.map((data)=>{
                                return(
                                    <WorksItem data={data} key={data.id} />
                                )
                            })
                        }
                    </ul>
                </div>
            </WorksStyles>
        </>
    )
}

export {Works}