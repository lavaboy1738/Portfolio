import { useState, useEffect } from "react"

export const useMousePosition = () => {
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handlePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }
    window.addEventListener("mousemove", handlePosition)
    return () => window.removeEventListener("mousemove", handlePosition)
  }, [])
  return mousePosition
}