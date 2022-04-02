import React from "react";
import Typewriter from "typewriter-effect";
function TypingEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "MERN Stack Devolper",
          "Problem Solver",
          "Debugger",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypingEffect;
