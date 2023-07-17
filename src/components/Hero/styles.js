import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif !important;
  overflow: hidden;
`;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent url(${(props) => props.image.src}) repeat 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.1;
  visibility: visible;
  z-index: -1;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${(props) => props.theme.colors.mainText};
  cursor: pointer;

  .stretch {
    transform: scale(1.4, 1);
    margin-right: 20px;
    margin-left: 20px;
    transition: 0.2s;

    @media (max-width: 500px) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  :hover {
    .stretch {
      transform: scale(1, 1);
      margin: 0px;
    }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  gap: 2px;

  .stretch {
    transform: scale(1.3, 1);
    margin-right: 10px;
    margin-left: 10px;
    transition: 0.2s;

    @media (max-width: 500px) {
      margin-left: 6px;
      margin-right: 6px;
    }
  }

  .coded {
    font-size: 9rem;
  }

  @media (max-width: 500px) {
    .coded {
      font-size: 5rem;
    }
  }

  :hover {
    .stretch {
      transform: scale(1, 1);
      margin: 0px;
    }
  }
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 3px ${(props) => props.theme.colors.mainText};
`;

export const Letter = styled.h1`
  font-size: 8.5rem;

  @media (max-width: 500px) {
    font-size: 4.5rem;
  }
`;

export const Wrapper = styled.div`
  width: fit-content;
  position: relative;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const Main = styled.div`
  @media (max-width: 450px) {
    width: 100vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const About = styled.h3`
  font-size: 2.2rem;
  font-family: "Quicksand", sans-serif;
  color: ${(props) => props.theme.colors.mainText};
  text-align: center;

  @media (max-width: 500px) {
    font-size: 1rem;
  }

  span {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const ViewButton = styled.div`
  position: absolute;
  bottom: -100px;
  left: 0;
  font-size: 1.5rem;
  font-family: "Quicksand", sans-serif;
  color: ${(props) => props.theme.colors.mainText};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 6px;

  svg {
    margin-top: 4px;
  }


  @media (max-width: 600px) {
    bottom: 0;
    position: relative;
    width: fit-content;
    font-size: 1rem;
  }

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    border-radius: 20px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    transition: all 0.4s ease;
  }

  :hover:before {
    width: 100%;
  }
`;

export const ContactButton = styled.div`
  position: absolute;
  bottom: -100px;
  right: 0;
  font-size: 1.5rem;
  font-family: "Quicksand", sans-serif;
  color: ${(props) => props.theme.colors.mainText};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 6px;

  svg {
    margin-top: 4px;
  }

  @media (max-width: 600px) {
    bottom: 0;
    position: relative;
    width: fit-content;
    font-size: 1rem;
  }

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    border-radius: 20px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    transition: all 0.4s ease;
  }

  :hover:before {
    width: 100%;
  }
`;

export const HeroFooter = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 50px;
  }
`;
