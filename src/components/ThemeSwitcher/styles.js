import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export const Icon = styled.div`
  background-color: ${(props) =>
    props.checked == "light-theme"
      ? props.theme.colors.primary
      : "transparent"};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: 0.5s;
  margin: ${(props) => (props.checked == "light-theme" ? "0" : "-12px 0 0 0")};
  box-shadow: ${(props) =>
    props.checked == "light-theme"
      ? "0 0 0 3px rgba(253, 153, 251, 0.9), 0 0 0 5px rgba(253, 153, 251, 0.5), 0 0 0 7px rgba(253, 153, 251, 0.3), 0 0 50px 8px rgba(253, 153, 251, 1)"
      : "5px 5px 0 0 #d7ef33"};
`;
