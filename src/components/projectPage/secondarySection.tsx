import React from "react";
import styled from "styled-components";

const SecondarySectionStyles = styled.div`
    margin: 20vh calc(var(--VW) *10);
    .content{
        h2{
            font-size: calc(var(--VW) *2);
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