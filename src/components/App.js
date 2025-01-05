import React, { useState, useEffect } from "react";

// Custom Hook: useMousePosition
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

// Main Component
const MousePosition = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
        The mouse position is: {x}, {y} 
    </div>
  );
};

export default MousePosition;
