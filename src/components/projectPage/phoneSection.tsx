import React from "react";
import styled from "styled-components";

const PhoneSectionStyles = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 15vh 10vw;
    justify-content: space-around;
    .image-wrapper{
        width: 28%;
        :nth-child(2){
            width: 30%;
            position: relative;
            top: -1vw;
        }
        img{
            width: 100%;
            height: auto;
            display: block;
        }
    }
`

type Prop = {
    phoneImgSrc: string[];
}

const PhoneSection = (props: Prop)=>{
    const {phoneImgSrc} = props;
    return(
        <PhoneSectionStyles data-scroll-section>
            <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="image-wrapper">
                <img src={phoneImgSrc[0]} alt=""/>
            </div>
            <div data-scroll data-scroll-speed="4" className="image-wrapper">
                <img src={phoneImgSrc[1]} alt="" className="triple-phone-main"/>
            </div>
            <div data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" className="image-wrapper">
                <img src={phoneImgSrc[2]} alt=""/>
            </div>
        </PhoneSectionStyles>
    )
}

export {PhoneSection};