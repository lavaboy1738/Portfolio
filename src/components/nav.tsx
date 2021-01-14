import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavStyles = styled.div`
    .logo, .works, .about{
        position: fixed;
        z-index: 10;
    }

    .logo{
        top: calc(var(--VW) *2 );
        left: calc(var(--VW) *2);
        width: calc(var(--VW) *3.2);
        height: calc(var(--VW) *3.2);
        mix-blend-mode: normal;
        svg{
            width: 100%;
            height: 100%;
            pointer-events: none;
            color: var(--black);
        }
    }

    .works, .about{
        transition: 0.3s all ease;
        transform: rotate(90deg);
        transform-origin: 0% 0%;
        right: calc(var(--VW) *-3);
        font-size: calc(var(--VW) *1.2);
        :hover{
            -webkit-text-stroke: calc(var(--VW) *0.1) var(--black);
        }
    }

    .works{
        top: calc(var(--VW) *2.2);
    }

    .about{
        bottom: calc(var(--VW) *6.5);
    }


`

const Nav = ()=>{

    return(
        <NavStyles>
            <Link className="logo nav-button" to="/">
                <svg width="100" height="87" viewBox="0 0 100 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.494 14.7075L75.9853 6.12184e-06L0 0L37.9926 65.8052L46.0622 51.8284L24.6304 14.7075H67.494Z" fill="#0F0E0E"/>
                <path d="M64.0369 21.1739L50.8778 43.9662L37.7186 21.1739L64.0369 21.1739Z" fill="#0F0E0E"/>
                <path d="M42.5905 72.67L50.3172 86.053L99.9999 3.66394e-05L84.5466 3.78854e-05L42.5905 72.67Z" fill="#0F0E0E"/>
                </svg>
            </Link>
            <Link className="works nav-button" to="/works">Works</Link>
            <Link className="about nav-button" to="/about">About</Link>
        </NavStyles>
    )
}

export {Nav};