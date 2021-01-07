import React from "react";
import styled from "styled-components";

const NotFoundStyles = styled.div`

`

const NotFound = ()=>{
    return (
        <NotFoundStyles>
            You're lost, kid. Go home.
        </NotFoundStyles>
    )
}

export {NotFound}