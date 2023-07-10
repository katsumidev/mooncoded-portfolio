import styled from "styled-components";

export const Container = styled.div`
  margin: 120px auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .left {
    margin-left: 10rem;
    align-self: flex-start;
  }

  .case-title {
    padding-top: 60px;
    margin-bottom: 4rem;
  }

  .divider {
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.03);
    margin: 20px 0;
  }

  @media only screen and (max-width: 768px) {
    .left {
      margin-left: 0;
      align-self: center;
    }

    .case-title {
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .case-title {
      margin-bottom: 3rem;
    }

    .left {
      margin-left: 0;
      align-self: center;
    }
  }
`;

export const MobileApp = styled.div`
  width: 80%;
  min-height: 450px;
  display: flex;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 26px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.mainText};
  position: relative;
  -webkit-clip-path: inset(-100vw 0 0 -100vw);
  clip-path: inset(-100vw 0 0 -100vw);
  margin-bottom: 70px;

  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-side {
    position: relative;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    flex: 0 0 50%;
    max-width: 50%;
    margin-right: ${(props) => (props.left ? "100px" : "0px")};
  }

  .img-right {
    margin-left: 10rem;
  }

  .img-left {
    margin-left: -10rem;
  }

  .phone-holder {
    position: absolute;
    width: 130%;
    max-width: 130%;
    top: -12rem;
  }

  @media only screen and (max-width: 768px) {
    .phone-holder {
      display: none;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    .phone-holder {
      display: none;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;

    .main-wrapper {
      flex-direction: column;
    }

    .right-side {
      max-width: 100%;
      margin-right: 0px;
      margin-bottom: 20px;
    }

    .phone-holder {
      position: relative;
      width: 100%;
      max-width: 100%;
      top: 0px;
      margin-top: 50px;

      img {
        position: relative;
        width: 100%;
      }
    }
  }
`;

export const ProductRow = styled.div`
  width: 80%;
  min-height: 450px;
  display: flex;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 26px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.mainText};
  position: relative;
  -webkit-clip-path: inset(-100vw 0 0 -100vw);
  clip-path: inset(-100vw 0 0 -100vw);
  margin-bottom: 70px;

  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-side {
    position: relative;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    flex: 0 0 50%;
    max-width: 50%;
    margin-right: ${(props) => (props.left ? "100px" : "0px")};
  }

  .phone-holder {
    position: absolute;
    width: 200%;
    max-width: 200%;
    top: -10rem;
  }

  .laptop {
    transition: all 0.2s;
    width: 100%;
    max-width: 100%;
    transform: rotate(-2deg);
    cursor: pointer;

    :hover {
      transform: scale(1.07);
    }
  }

  @media only screen and (max-width: 768px) {
    .phone-holder {
      display: none;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    .phone-holder {
      display: none;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;

    .main-wrapper {
      flex-direction: column;
    }

    .right-side {
      max-width: 100%;
      margin-right: 0px;
      margin-bottom: 20px;
    }

    .phone-holder {
      position: relative;
      width: 100%;
      max-width: 100%;
      top: 0px;
      margin-top: 50px;

      img {
        position: relative;
        width: 100%;
      }
    }
  }
`;

export const Phone = styled.img`
  transition: all 0.2s;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  :hover {
    transform: scale(1.07);
  }
`;

export const AppDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.mainText};
  gap: 20px;

  width: 100%;
  min-width: 70%;

  .app-title {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h4 {
    font-weight: 500;
  }

  @media (max-width: 1100px) {
    min-width: 0% !important;

    .app-title {
      flex-direction: column;
    }
  }

  @media (max-width: 900px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
`;

export const InBuildBtn = styled.div`
  padding: 12px 25px;
  background-color: #565663;
  border-radius: 20px;
  width: fit-content;
  cursor: pointer;
`;

export const StacksRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 100%;
  align-items: center;
`;
