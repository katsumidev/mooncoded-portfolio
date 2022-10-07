import React from "react";
import { Container, Icon } from "./styles";

function ThemeSwitcher(props) {
  return (
    <Container onClick={props.onClick}>
      <Icon checked={props.checked} />
    </Container>
  );
}

export default ThemeSwitcher;
