import React from "react";
import styled from "styled-components";

const TabletSectionStyles = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15vh 0;
    .main{
        width: 60%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
        }
    }
    .side{
        width: 35%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
        }
    }
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        margin: 5vh 0;
    }
`

type Prop = {
    tabletImgSrc: string[]
}

const TabletSection = (props: Prop)=>{
    const {tabletImgSrc} = props;
    const mobile = window.innerWidth < 500? true : false;
    return(
        <TabletSectionStyles data-scroll-section >
            <div data-scroll data-scroll-speed={mobile? "1" : "4"} className="side">
                <img src={tabletImgSrc[1]} alt=""/>
            </div>
            <div data-scroll data-scroll-speed={mobile? "1" : "0.5"} className="main">
                <img src={tabletImgSrc[0]} alt=""/>
            </div>
        </TabletSectionStyles>
    )
}

export {TabletSection}