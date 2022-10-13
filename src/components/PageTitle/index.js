import React from "react";
import { Zoom, Fade } from "react-reveal";
import { Header, Title, Letter } from "./styles";

function PageTitle(props) {
  const array = props.title.split("");

  return (
    <Header>
        <p><Fade delay={400}>{props.overlayTitle}</Fade></p>
      <Title>
        {array.map((i) => (
          <Zoom>
            <Letter className={i === props.stretchedLetter ? "stretch" : ""}>
              {i}
            </Letter>
          </Zoom>
        ))}
      </Title>
      <hr />
    </Header>
  );
}

export default PageTitle;
