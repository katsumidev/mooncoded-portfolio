import React from "react";
import { Zoom, Fade } from "react-reveal";
import { Header, Title, Letter } from "./styles";
import { motion } from "framer-motion";

function PageTitle(props) {
  const array = props.title.split("");

  return (
    <Header
      as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {props.overlayTitle}
      </motion.p>
      <Title>
        {array.map((i, index) => (
          <Letter key={index} className={i === props.stretchedLetter ? "stretch" : ""}>
            {i}
          </Letter>
        ))}
      </Title>
      <motion.hr
        initial={{ opacity: 0, x: -1000, scale: 0.2 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
    </Header>
  );
}

export default PageTitle;
