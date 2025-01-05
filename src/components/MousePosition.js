//not in use
import React from "react";
import useMousePosition from "../customHook/useMousePosition ";

const MousePosition = () => {
  const {x, y} = useMousePosition();

  return (
    <div>
        The mouse position is: {x}, {y} 
    </div>
  )
}

export default MousePosition;
