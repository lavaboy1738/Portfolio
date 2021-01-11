import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {Link} from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import Xpensityv2lg1 from "../assets/images/projects/xpensityv2-lg-1.png";
import Xpensityv2lg2 from "../assets/images/projects/xpensityv2-lg-2.png";
import Xpensityv2lg3 from "../assets/images/projects/xpensityv2-lg-3.png";
import laptopMain from "../assets/images/projects/agency/agencyLaptopMain.png";
import laptopSide from "../assets/images/projects/agency/agencyLaptopSide.png";
import tabletMain from "../assets/images/projects/xpensityV2/tabletMain.png";
import tabletSide from "../assets/images/projects/xpensityV2/tabletSide.png";

const ProjectStyles  = styled.div`
padding: 6vw 5vw;
padding-right: 6vw;
.number{
    font-size: 40vw;
    position: relative;
    left: -26%;
    margin-bottom: -4vw;
    overflow: hidden;
}
.main{
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-end;
    .content{
        width: 40%;
        &-title{
            font-size: 3vw;
            position: relative;
            margin-bottom: 2vw;
            .underline{
                position: absolute;
                width: 30%;
                height: 0.3vw;
                left: 0;
                bottom: -1vw;
                background-color: var(--black);
            }
        }
        &-links{
            text-align: right;
            margin-bottom: 2vw;
            a{
                margin-left: 1vw;
                height: 100%;
                display: inline-block;
                svg{
                    width: 3vw;
                    height: 3vw;
                    pointer-events: none;
                    mix-blend-mode: difference;
                    color: var(--black);
                    background-color: var(--burlywood);
                }
            }
        }
        &-text{
            margin-bottom: 3vw;
        }
    }
}
.secondary{
    margin: 20vh 10vw;
    &-content{
        h2{
            font-size: 2vw;
        }
    }
}
.triple-phone{
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
}
.desktop{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15vh 0;
    &-main{
        width: 50%;
    }
    &-side{
        width: 30%;
    }
}

.tablet{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15vh 0;
    &-main{
        width: 50%;
    }
    &-side{
        width: 30%;
    }
}

.footer{
    display: flex;
    justify-content: space-between;
    font-size: 3vw;
}

`

const Project = ()=>{
    const scrollRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(()=>{
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smartphone:{
                smooth: true,
            },
            tablet: {
                smooth: true
            }
        })
        setTimeout(()=>scroll.update(), 300);
        return ()=>{
            if(scroll) scroll.destroy();
        }
    }, [location])

    return (
        <>
        <Nav/>
        <ProjectStyles ref={scrollRef} data-scroll-container>
            <h1 data-scroll-section className="number">
                <span>0</span>
                <span>2</span>
            </h1>
            <div data-scroll-section className="main">
                <div className="content">
                    <h1 className="content-title">Xpensity V2<span className="underline"></span></h1>
                    <div className="content-links">
                        <a href="" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"></path></svg>
                        </a>
                        <a href="" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path></svg>
                        </a>
                    </div>
                    <p className="content-text">Everyone needs a budgeting tool. Xpensity can help you to get in control of your own daily expenditures. 
                    This mobile-first Progressive Web App enables the user to record quick transactions on-the-go. 
                    With lightning-fast load time, custom category tags and easy access to the number pad, you can record a transaction in seconds. </p>
                    <p className="content-text">The second iteration is built with React. Changes are made to the UI to motivate and guide user behaviour. 
                    The complete separation of income and expenditure forces the user to make a category selection when creating a record. 
                    Additionally, data-visualization is added using Apache ECharts for a better user experience. 
                    Custom labels are abandoned after poor feedback from the first iteration. </p>
                </div>
            </div>
            <div data-scroll-section className="secondary">
                <div className="secondary-content">
                    <h2>React</h2>
                    <h2>Typescript</h2>
                    <h2>Custom Hooks</h2>
                    <h2>Data Visualization</h2>
                    <h2>Interview/Survey</h2>
                    <h2>CSS in JS</h2>
                    <h2>UI/UX</h2>
                </div>
            </div>
            <div data-scroll-section className="triple-phone">
                <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="image-wrapper">
                    <img src={Xpensityv2lg3} alt=""/>
                </div>
                <div data-scroll data-scroll-speed="4" className="image-wrapper">
                    <img src={Xpensityv2lg1} alt="" className="triple-phone-main"/>
                </div>
                <div data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" className="image-wrapper">
                    <img src={Xpensityv2lg2} alt=""/>
                </div>
            </div>
            <div data-scroll-section className="desktop">
                <div data-scroll data-scroll-speed="0.5" className="desktop-main">
                    <img src={laptopMain} alt=""/>
                </div>
                <div data-scroll data-scroll-speed="4" className="desktop-side">
                    <img src={laptopSide} alt=""/>
                </div>
            </div>
            <div data-scroll-section className="tablet">
                <div data-scroll data-scroll-speed="4" className="tablet-side">
                    <img src={tabletSide} alt=""/>
                </div>
                <div data-scroll data-scroll-speed="0.5" className="tablet-main">
                    <img src={tabletMain} alt=""/>
                </div>
            </div>
            <div data-scroll-section className="footer">
                <Link to="/works">Previous</Link>
                <Link to="/works">Next</Link>
            </div>
        </ProjectStyles>
        </>
    )
}

export {Project}