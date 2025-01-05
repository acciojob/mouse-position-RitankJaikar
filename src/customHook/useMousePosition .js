//not in use
import React, { useEffect, useState } from "react";

export default function useMousePosition() {
    const [mousePosition, setMousePositon] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePositon({
                x: e.clientX,
                y: e.clientY
            })
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    console.log(mousePosition);

    return mousePosition;
}