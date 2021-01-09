import React from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";

const AboutStyles = styled.div`

`

const About = ()=>{
    return (
        <>
            <Nav/>
            <AboutStyles>
                about
            </AboutStyles>
        </>
    )
}

export {About}