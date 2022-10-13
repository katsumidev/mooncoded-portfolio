import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 100%;
  margin: 80px auto;
  gap: 50px;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.mainText};
  text-align: center;
  gap: 30px;

  span {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transition: 0.3s;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    max-width: 500px;
    text-align: center;

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    justify-content: center;
  }
`
