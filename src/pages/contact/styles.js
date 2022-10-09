import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  left: 0;
  width: 50%;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  gap: 50px;
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
    background: ${(props) => props.theme.colors.primary};
    filter: drop-shadow(0 0 1.5px ${(props) => props.theme.colors.primary});
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
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.colors.mainText};
  cursor: pointer;
  width: 80%;
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
  font-size: 3.5rem;
`;

export const SubmitButton = styled.button`
  width: 100px;
  align-self: flex-end;
  position: relative;
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
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
    background: ${(props) => props.theme.colors.primary};
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
