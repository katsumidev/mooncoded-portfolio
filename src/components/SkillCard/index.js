import Tilt from "react-parallax-tilt";
import React from "react";
import { Container, Front, Back } from "./styles";

function SkillCard(props) {
  return (
    <Tilt
      tiltReverse={true}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      gyroscope={true}
    >
      <Container>
        <p>{props.data.title}</p>
        <div>
          <img
            src={`/static/assets/${props.data.first.icon}`}
            alt={props.data.first.alt}
          />
          <img
            src={`/static/assets/${props.data.second.icon}`}
            alt={props.data.second.alt}
          />
          <img
            src={`/static/assets/${props.data.third.icon}`}
            alt={props.data.third.alt}
          />
        </div>
      </Container>
    </Tilt>
  );
}

export default SkillCard;
