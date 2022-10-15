import React from "react";
import styled from "styled-components";
import {
  Container,
  Info,
  Date,
  TagContainer,
  Title,
  TagWrapper,
  Overlay,
  ImageWrapper,
  EntraptaWrapper,
  ImageComp,
} from "./styles";
import EntraptaEyes from "../EntraptaEyes";
import { AiFillCalendar } from "../../styles/Icons";

function PostCard(props) {
  var categories = props.categories.split(",");

  const myLoader = () => {
    return props.image;
  };

  return (
    <Container onClick={props.onClick}>
      <ImageWrapper>
        <ImageComp
          loader={myLoader}
          alt={props.title}
          src={props.image}
          layout="fill"
        />
        <Overlay />
        <EntraptaWrapper>
          <EntraptaEyes />
        </EntraptaWrapper>
      </ImageWrapper>
      <Info>
        <Date>
          <AiFillCalendar /> {props.date}
        </Date>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <TagWrapper>
          {categories.map((category) => {
            return <Tag key={category} title={category} />;
          })}
        </TagWrapper>
      </Info>
    </Container>
  );
}

function Tag(props) {
  return (
    <TagContainer>
      <Title>#{props.title}</Title>
    </TagContainer>
  );
}

export default PostCard;
