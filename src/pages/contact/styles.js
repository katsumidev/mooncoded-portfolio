import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: 750px) {
    flex-direction: column;
    margin: 80px 0 0 0;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  left: 0;
  width: 50%;

  @media (max-width: 750px) {
    width: 100vw;
  }

  hr {
    background: ${(props) => props.theme.colors.mainText};
    width: 80%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: relative;

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

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  gap: 40px;
`;

export const InputData = styled.div`
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;

  .underline:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    transition: all 0.4s ease;
  }

  input:focus ~ .underline:before {
    width: 100%;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.secundaryBackground};
  color: ${(props) => props.theme.colors.mainText};
  transition: 0.2s;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.secundaryBackground};
  color: ${(props) => props.theme.colors.mainText};
  transition: 0.2s;
  cursor: pointer;
  width: 100%;
  max-width: 100%;
  height: 200px;
  max-height: 400px;
  font-size: 12px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.colors.mainText};
  cursor: pointer;
  font-weight: unset;

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
  font-size: 5.5rem;
  opacity: ${(props) => props.theme.title === "light-theme" ? "0.2" : "0.1"};

  @media (max-width: 900px) {
    font-size: 4.5rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  align-self: flex-end;
  position: relative;
  padding: 10px 15px;
  border: 1px solid;
  border-image: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    )
    1;
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;
  gap: 5px;

  :after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    transition: all 0.3s ease;
  }

  :hover {
    color: #ffffff;
  }

  :hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 80%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  right: 0;
  width: 50%;

  @media (max-width: 750px) {
    width: 100vw;
    margin: 40px 0 0 0;
  }
`