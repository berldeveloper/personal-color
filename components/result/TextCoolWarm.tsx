"use client";

import ScrollVelocity from "../ScrollVelocity";

const velocity = 100;

const TextCoolWarm = () => {
  return (
    <ScrollVelocity
      texts={["React Bits", "Scroll Down"]}
      velocity={velocity}
      className="custom-scroll-text"
    />
  );
};

export default TextCoolWarm;
