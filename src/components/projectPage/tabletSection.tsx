import React from "react";
import styled from "styled-components";

const TabletSectionStyles = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15vh 0;
    .main{
        width: 60%;
    }
    .side{
        width: 35%;
    }
`

type Prop = {
    tabletImgSrc: string[]
}

const TabletSection = (props: Prop)=>{
    const {tabletImgSrc} = props;
    return(
        <TabletSectionStyles data-scroll-section >
            <div data-scroll data-scroll-speed="4" className="side">
                <img src={tabletImgSrc[1]} alt=""/>
            </div>
            <div data-scroll data-scroll-speed="0.5" className="main">
                <img src={tabletImgSrc[0]} alt=""/>
            </div>
        </TabletSectionStyles>
    )
}

export {TabletSection}