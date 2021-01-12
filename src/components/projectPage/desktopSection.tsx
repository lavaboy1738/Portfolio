import React from "react";
import styled from "styled-components";

const DesktopSectionStyles = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15vh 0;
    .main{
        width: 55%;
    }
    .side{
        width: 35%;
    }
`

type Prop = {
    desktopImgSrc: string[]
}

const DesktopSection = (props: Prop)=>{
    const {desktopImgSrc} = props;
    return(
        <DesktopSectionStyles data-scroll-section >
            <div data-scroll data-scroll-speed="0.5" className="main">
                <img src={desktopImgSrc[0]} alt=""/>
            </div>
            <div data-scroll data-scroll-speed="4" className="side">
                <img src={desktopImgSrc[1]} alt=""/>
            </div>
        </DesktopSectionStyles>
    )
}

export {DesktopSection}