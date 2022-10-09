import React from "react";
import background from "/public/static/assets/background.gif";
import {
  Container,
  Title,
  SubTitle,
  Letter,
  Wrapper,
  About,
  Background,
  ViewButton,
  ContactButton,
} from "./styles";
import { BsEye, BsChat } from "../../styles/Icons";

function Hero() {
  return (
    <Container>
      <Background image={background} />
      <Wrapper>
        <Title>
          <Letter className="stretch">M</Letter>
          <Letter>O</Letter>
          <Letter>O</Letter>
          <Letter className="stretch">N</Letter>
        </Title>
        <SubTitle>
          <Letter>C</Letter>
          <Letter>O</Letter>
          <Letter>D</Letter>
          <Letter className="stretch">E</Letter>
          <Letter className="stretch">D</Letter>
        </SubTitle>
        <About>
          Front-end web <span>developer</span>, UI/UX Designer & artist ✍️
        </About>
        <ViewButton>
          <BsEye /> check my projects
        </ViewButton>
        <ContactButton>
          <BsChat /> talk with me
        </ContactButton>
      </Wrapper>
    </Container>
  );
}

export default Hero;
