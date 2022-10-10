import styled from "styled-components";
import { Container } from "../PostCard/styles";

export const ContainerEye = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  background-color: #171122;
  border: 1px solid white;
  height: 90px;
  padding: 7px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  gap: 7px;
`;

export const Eyes = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.entraptaGlasses};
  border-radius: 100%;
  opacity: 1;
  overflow: hidden;
  transition: 0.2s;
  filter: drop-shadow(0 0 5px ${(props) => props.theme.colors.entraptaGlasses});
  margin: 7px 0;
  z-index: 1;
`;

export const Light = styled.div`
  display: flex;
  width: 11px;
  height: 180px;
  background-color: ${(props) => props.theme.colors.entraptaGlassesLight};
  transform: rotate(45deg);
  margin: -10px;
  animation: lightmove 2s infinite;
  animation-fill-mode: forwards;
  animation-play-state: paused;

  ${Container}:hover & {
    animation-play-state: running;
  }

  ::after {
    content: "";
    width: 3px;
    height: 200px;
    background-color: ${(props) => props.theme.colors.entraptaGlassesLight};
    margin: 0 -5px;
    animation: lightmove 2s infinite;
    animation-fill-mode: forwards;
    animation-play-state: paused;

    ${Container}:hover & {
      animation-play-state: running;
    }
  }

  @keyframes lightmove {
    0%,
    35% {
      margin-top: -110px;
    }
    50%,
    80% {
      margin-top: -50px;
    }
    100% {
      margin-top: 40px;
    }
  }
`;
