import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ProjectFooterStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: calc(var(--VW) *3);
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size: calc(var(--VW) *6);
    }
    .next{
        span{
            position: relative;
            top: -5%;
            right: 5%;
            transition: 0.3s all ease-out;
            pointer-events: none;
        }
        &:hover{
            span{
                right: -5%;
                transition: 0.3s all ease-out;
            }
        }
    }
`

type Prop = {
    next: string,
}

const ProjectFooter = (props: Prop)=>{
    const {next} = props;
    return(
        <ProjectFooterStyles data-scroll-section>
            <Link to={next} className="next">next <span>&rsaquo;</span></Link>
        </ProjectFooterStyles>
    )
}

export {ProjectFooter}