import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  font-family: Arial, Helvetica, sans-serif !important;
`;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: transparent url(${(props) => props.image.src}) repeat 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.1;
  visibility: visible;
  z-index: -2;
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

  .stretch {
    transform: scale(1.3, 1);
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
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 3px ${(props) => props.theme.colors.mainText};
`;

export const Letter = styled.h1`
  font-size: 6.5rem;
`;

export const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`;

export const About = styled.h3`
  font-size: 1.2rem;
  font-family: "Quicksand", sans-serif;
  color: ${(props) => props.theme.colors.mainText};

  span {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    transition: 0.3s;

    :hover {
      filter: drop-shadow(0 0 2px ${(props) => props.theme.colors.primary});
    }
  }
`;

export const ViewButton = styled.div`
  position: absolute;
  bottom: -100px;
  left: 0;
  font-size: 1.2rem;
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

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.primary};
    filter: drop-shadow(0 0 1.5px ${(props) => props.theme.colors.primary});
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
  font-size: 1.2rem;
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

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.primary};
    filter: drop-shadow(0 0 1.5px ${(props) => props.theme.colors.primary});
    transition: all 0.4s ease;
  }

  :hover:before {
    width: 100%;
  }
`
