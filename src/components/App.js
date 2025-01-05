
import React from "react";
import './../styles/App.css';
import useMousePosition from "../customHook/useMousePosition ";

const App = () => {
  const {x, y} = useMousePosition();

  return (
    <div>
        The mouse position is: {x}, {y} 
    </div>
  )
}

export default App
