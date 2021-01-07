import { useState, useEffect } from "react"

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverNav, setHoverNav] = useState(false);

  useEffect(() => {
    const handlePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY })
      if((e.target as HTMLElement).classList.contains("nav-button")){
          setHoverNav(true);
      }else{
          setHoverNav(false);
      }
    }

    window.addEventListener("mousemove", handlePosition)
    return () => window.removeEventListener("mousemove", handlePosition)
  }, [])
  return {...mousePosition, hoverNav}
}