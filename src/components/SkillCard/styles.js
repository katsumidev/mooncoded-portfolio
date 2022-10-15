import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 200px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border: 1px solid pink;
  padding: 16px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.mainText};
  border-image: linear-gradient(
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    )
    1;
  gap: 15px;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    transition: 0.2s;
  }
`;
