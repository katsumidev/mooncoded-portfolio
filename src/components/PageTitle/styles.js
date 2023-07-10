import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: relative;

  hr {
    background: ${(props) => props.theme.colors.mainText};
    width: 50%;
  }

  p {
    text-transform: uppercase;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.mainText};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
    word-spacing: 10px;
    white-space: nowrap;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.colors.mainText};
  cursor: pointer;
  width: auto;
  font-weight: unset;

  .fill {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px ${(props) => props.theme.colors.mainText};
  }

  .stretch {
    transform: scale(1.5, 1);
    margin-right: 10px;
    margin-left: 10px;
    transition: 0.2s;
  }

  :hover {
    .stretch {
      transform: scale(1, 1);
      margin: 0px;
    }
  }
`;

export const Letter = styled.h1`
  font-size: 7.5rem;
  text-transform: uppercase;
  opacity: ${(props) => (props.theme.title === "light-theme" ? "0.2" : "0.1")};

  @media (max-width: 900px) {
    font-size: 4.5rem;
  }
`;
