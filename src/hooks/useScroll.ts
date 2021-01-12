import {useRef, useEffect} from "react";
import LocomotiveScroll from "locomotive-scroll";
import {useLocation} from "react-router-dom";

const useScroll = ()=>{
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

    return {scrollRef}
}

export {useScroll}