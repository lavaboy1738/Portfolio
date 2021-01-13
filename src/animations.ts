export const Animations = ()=>{
    const transition = {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9]
    }

    const maskAnimation = {
        initial: {
            left: "-120%"
        },
        animate: {
            left: ["-120%", "0%", " 0%","120%"]
        }
    }


    const parent = {
        animate: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 1.5
            }
        }
    }

    const textReveal = {
        initial: {
            y: "50%",
            opacity: 0
        },
        animate: {
            y: "0",
            opacity: 1
        }
    }

    return {
        transition,
        maskAnimation,
        parent,
        textReveal
    }
}