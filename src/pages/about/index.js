import React from "react";
import { Container, Header, Title, Letter, AboutMe } from "./styles";

function about() {
  return (
    <Container>
      <Header>
      <p>techs | experiences | skills | more.. </p>
        <Title>
          <Letter>A</Letter>
          <Letter className="stretch">B</Letter>
          <Letter>O</Letter>
          <Letter>U</Letter>
          <Letter>T</Letter>
        </Title>
        <hr />
      </Header>
      <AboutMe>
        <h1>
          👋 Hi! I'm <span>Moon</span>, a software developer
        </h1>
        <p>
          I've benn studying software development since 2018, I'm passionate
          about solving problems and facing challenges, that's why I love
          technology and software development since I was a child, I always
          trying to work and study the most diverse types of technology that I
          can.
        </p>
        <p>
          I'm a quick learner, it doesn't matter if I dont know... i can learn.
          I am currently focused on web development using technologies such as:
        </p>
      </AboutMe>
    </Container>
  );
}

export default about;
