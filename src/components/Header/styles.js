import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-right: 15px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  transition: 0.2s;
  z-index: 999;
  color: ${(props) => props.theme.colors.mainText};
  width: 90vw;

  ${(props) =>
    props.theme.title == "dark-theme"
      ? css`
          background: rgba(42, 43, 56, 0.5);
          border: 0.1rem solid rgba(255, 255, 255, 0.1);
          -webkit-backdrop-filter: blur(104px);
          backdrop-filter: blur(104px);
          border-radius: 8px;
        `
      : css`
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        `}

  ${(props) =>
    props.open &&
    css`
      width: 100vw;
      margin-top: 0px;
    `}

  img {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  :hover {
    .back-text {
      opacity: 1;
      transform: translateX(0px);
    }
  }
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
    font-size: 16px;
    gap: 20px;
    align-items: center;

    li {
      cursor: pointer;
      position: relative;
      transition: 0.2s;
      padding: 6px;
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        font-size: 10px;
        font-weight: 900;
        margin-right: 3px;
        color: ${(props) => props.theme.colors.primary};
      }

      :before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 0%;
        border-radius: 20px;
        background: linear-gradient(
          to right,
          ${(props) => props.theme.colors.primary},
          ${(props) => props.theme.colors.secundary}
        );
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
      filter: drop-shadow(0 0 2px ${(props) => props.theme.colors.primary});
      fill: ${(props) => props.theme.colors.primary};
      transform: scale(1.3);
    }
  }
`;

export const ThemeSwitcher = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
`;

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
  height: 60px;
  padding: 4.5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  gap: 7px;
  transform: scale(0.6);
`;

export const Eyes = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  background-color: ${(props) => props.theme.colors.entraptaGlasses};
  border-radius: 100%;
  opacity: 1;
  overflow: hidden;
  transition: 0.2s;
  filter: drop-shadow(0 0 5px ${(props) => props.theme.colors.entraptaGlasses});
  margin: 7px 0;
  z-index: 1;
`;

export const Light = styled.div`
  display: flex;
  width: 11px;
  height: 160px;
  background-color: ${(props) => props.theme.colors.entraptaGlassesLight};
  transform: rotate(45deg);
  margin: -10px;
  animation: lightmove 2s infinite;
  animation-fill-mode: forwards;

  ::after {
    content: "";
    width: 3px;
    height: 200px;
    background-color: ${(props) => props.theme.colors.entraptaGlassesLight};
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

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: flex;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  gap: 40px;
  top: 0;
  left: 0;
  opacity: 0;
  animation: fadeIn 0.5s;
  animation-play-state: running;
  animation-fill-mode: both;
  transition: all 0.2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      height: 0px;
      transform: translateY(
        -100%
      ); /* Adicione esta linha para animar o translateY */
    }
    to {
      opacity: 1;
      height: 100vh;
      transform: translateY(
        0%
      ); /* Adicione esta linha para animar o translateY */
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 3em;
    gap: 20px;
    align-items: center;

    li {
      cursor: pointer;
      position: relative;
      transition: 0.2s;
      padding: 6px;

      span {
        font-size: 1.5rem;
        font-weight: 900;
        margin-right: 3px;
        color: ${(props) => props.theme.colors.primary};
      }

      :before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 0%;
        border-radius: 20px;
        background: linear-gradient(
          to right,
          ${(props) => props.theme.colors.primary},
          ${(props) => props.theme.colors.secundary}
        );
        transition: all 0.4s ease;
      }

      :hover:before {
        width: 100%;
      }
    }
  }
`;

export const DesktopHeader = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;
  z-index: 2999;

  @media (max-width: 750px) {
    display: flex;
  }
`;

export const BackText = styled.div`
  font-weight: 900;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.4s;
`;
