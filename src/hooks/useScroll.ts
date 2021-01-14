import {useRef, useEffect} from "react";
import LocomotiveScroll from "locomotive-scroll";
import {useLocation} from "react-router-dom";

const useScroll = ()=>{
    const scrollRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    useEffect(()=>{
        const imagesLoaded = require("imagesloaded");
        const images = document.querySelectorAll("img");
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
        imagesLoaded(images, ()=>{
            scroll.update();
        })
        return ()=>{
            if(scroll) scroll.destroy();
        }
    }, [location])

    return {scrollRef}
}

export {useScroll}