import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-right: 15px;
  top: 0;
  transition: .2s;
  z-index: 999;
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`

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

export const ThemeSwitcher = styled.div`
  background-color: ${props => props.checked == "light-theme" ? props.theme.colors.primary : props.theme.colors.secundary};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
`


export const EntraptaWrapper = styled.div`
  display: flex;
  transition: 0.2s;
  cursor: pointer;
`;

export const ContainerEye = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  background-color: #171122;
  border: 3px solid white;
  height: 90px;
  padding: 7px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  gap: 7px;
  transform: scale(0.4);
`;

export const Eyes = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #f6328f;
  border-radius: 100%;
  opacity: 1;
  overflow: hidden;
  transition: 0.2s;
  filter: drop-shadow(0 0 5px #f6328f);
  margin: 7px 0;
  z-index: 1;
`;

export const Light = styled.div`
  display: flex;
  width: 11px;
  height: 180px;
  background-color: #f86fb0;
  transform: rotate(45deg);
  margin: -10px;
  animation: lightmove 2s infinite;
  animation-fill-mode: forwards;

  ::after {
    content: "";
    width: 3px;
    height: 200px;
    background-color: #f86fb0;
    margin: 0 -5px;
    animation: lightmove 2s infinite;
    animation-fill-mode: forwards;
  }

  @keyframes lightmove {
    0%,
    35% {
      margin-top: -110px;
    }
    50%,
    80% {
      margin-top: -50px;
    }
    100% {
      margin-top: 40px;
    }
  }
`;
