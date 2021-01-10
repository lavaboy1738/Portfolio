import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {Locomotive} from "../styles/locomotive";
import LocomotiveScroll from "locomotive-scroll";

const ProjectStyles  = styled.div`
padding: 6vw 5vw;
padding-right: 6vw;
.number{
    font-size: 40vw;
    position: relative;
    left: -26%;
}

`

const Project = ()=>{
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        async function getLocomotive() {
            const Locomotive = (await import("locomotive-scroll")).default;
            const scroll = new Locomotive({
              el: scrollRef.current,
              smooth: true,
            });
        }
        getLocomotive();
    }, [])

    return (
        <>
        <Nav/>
        <ProjectStyles ref={scrollRef} data-scroll-container>
            <h1 className="number">02</h1>
            <div className="main">
                <div className="spacer"></div>
                <div className="content">
                    <h1 className="title">Xpensity V2</h1>
                    <div className="underline"></div>
                    <p className="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil non et reiciendis, inventore aliquid voluptatem eveniet sit animi mollitia assumenda modi velit labore ut libero debitis numquam, vitae placeat?
                    Voluptates eaque assumenda est minus qui, voluptate autem porro necessitatibus veniam neque consequuntur quo totam ipsam explicabo maxime a nulla architecto voluptas error itaque doloremque saepe. Facere voluptatem iusto asperiores!
                    Quibusdam vitae, harum est asperiores architecto ipsa odio nostrum labore modi alias provident accusantium dolorum molestias laudantium, repellat earum eveniet debitis similique nihil totam. Placeat ex perferendis rem suscipit quasi.</p>
                    <p className="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero velit similique, fugit nulla fuga magni qui omnis optio doloremque temporibus cumque vitae quas ab libero quidem quis debitis suscipit?
                    Expedita, eius obcaecati inventore amet doloribus recusandae? Magnam quis omnis numquam, nemo at quod ullam autem et aliquam id nam adipisci commodi harum neque repellendus dolor. Mollitia, cumque error. Est?
                    Tempore nostrum quo odit fugiat illo nihil atque quidem tenetur modi, voluptatem blanditiis accusantium? Optio, nobis fuga. Soluta ad atque, et nihil reprehenderit, nisi, fugit nemo voluptatem id quo distinctio!</p>
                </div>
            </div>
        </ProjectStyles>
        </>
    )
}

export {Project}