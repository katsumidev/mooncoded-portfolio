import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor || "grey"};
  color: ${({ textColor }) => textColor || "inherit"};
  border-radius: 20px;
  padding: 3px 14px;
  width: fit-content;
  font-weight: 600;
  font-size: 12px;
`;