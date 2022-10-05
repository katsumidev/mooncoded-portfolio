import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px;
  top: 0;
  transition: .2s;
  color: ${(props) => props.theme.colors.mainText};
  height: ${(props) => (props.active ? "50px" : "60px")};
  width: 100vw;
  background-color: ${(props) => (props.active ? props.theme.colors.background : "transparent")};
  box-shadow: ${(props) =>
    props.active ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none"};

  img {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    font-weight: 500;
    font-size: 13px;
    gap: 20px;
    align-items: center;

    li {
      cursor: pointer;
      position: relative;
      transition: 0.2s;
      padding: 6px;

      :before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 0%;
        border-radius: 20px;
        background: ${props => props.theme.colors.primary};
        filter: drop-shadow(0 0 1.5px ${props => props.theme.colors.primary});
        transition: all 0.4s ease;
      }

      :hover:before {
        width: 100%;
      }
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    transition: 0.2s;

    :hover {
      filter: drop-shadow(0 0 2px ${props => props.theme.colors.primary});
      fill: ${props => props.theme.colors.primary};
    }
  }
`;
