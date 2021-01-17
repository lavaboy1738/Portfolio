import React from "react";
import styled from "styled-components";

const SecondarySectionStyles = styled.div`
    margin: 20vh 10vw;
    @media (hover: none) and (pointer: coarse)   {
        margin: 10vh 0;
    }
    .content{
        h2{
            font-size: calc(var(--VW) *2);
            @media (hover: none) and (pointer: coarse)   {
                font-size: calc(var(--VW) *6);
            }
        }
    }
`

type Prop = {
    secondary: string[]
}

const SecondarySection = (props: Prop)=>{
    const {secondary} = props;
    return(
        <SecondarySectionStyles data-scroll-section >
            <div className="content">
                {
                    secondary.map((text, index)=>{
                        return(
                            <h2 key={index}>{text}</h2>
                        )
                    })
                }
            </div>
        </SecondarySectionStyles>
    )
}

export {SecondarySection}