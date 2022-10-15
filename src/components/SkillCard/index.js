import Tilt from "react-parallax-tilt";
import React from "react";
import { Container, Front, Back } from "./styles";
import Image from "next/image";

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
          <Image
            src={`/static/assets/${props.data.first.icon}`}
            alt={props.data.first.alt}
            width={32}
            height={32}
          />
          <Image
            src={`/static/assets/${props.data.second.icon}`}
            alt={props.data.second.alt}
            width={32}
            height={32}
          />
          <Image
            src={`/static/assets/${props.data.third.icon}`}
            alt={props.data.third.alt}
            width={32}
            height={32}
          />
        </div>
      </Container>
    </Tilt>
  );
}

export default SkillCard;
