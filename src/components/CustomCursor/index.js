import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";

function CustomCursor() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });

      const { cursor } = getComputedStyle(e.target);

      if (cursor == "pointer") {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 12.5,
      y: mousePos.y - 12.5,
    },
    hover: {
      height: 60,
      width: 60,
      x: mousePos.x - 30,
      y: mousePos.y - 30,
    },
  };

  return (
    <Container>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </Container>
  );
}

export default CustomCursor;
