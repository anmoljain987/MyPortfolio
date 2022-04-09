import React from "react";
import Typewriter from "typewriter-effect";
function TypingEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "MERN Stack Developer",
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
