import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  gap: 40px;

  hr {
    background: ${(props) => props.theme.colors.mainText};
    width: 50%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  white-space: nowrap;

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

    @media (max-width: 750px) {
      word-spacing: 5px;
    }

    @media (max-width: 500px) {
      font-size: 9pt;
      word-spacing: 0px;
    }
  }
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
  font-size: 7.5rem;
  opacity: ${(props) => props.theme.title === "light-theme" ? "0.2" : "0.1"};

  @media (max-width: 900px) {
    font-size: 4.5rem;
  }
`;
