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
} from "./styles";
import EntraptaEyes from "../EntraptaEyes";
import {AiFillCalendar} from '../../styles/Icons'

function PostCard(props) {
  var categories = props.categories.split(",");

  return (
    <Container onClick={props.onClick}>
      {/* Using a functional prop to make the onClick function work */}
      <ImageWrapper>
        <img alt={props.title} src={props.image} />
        <Overlay />
        <EntraptaWrapper>
          <EntraptaEyes />
        </EntraptaWrapper>
      </ImageWrapper>
      <Info>
        <Date><AiFillCalendar /> {props.date}</Date>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <TagWrapper>
          {categories.map((category) => {
            return <Tag title={category} />;
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
