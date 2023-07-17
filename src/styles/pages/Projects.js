import styled from "styled-components";

export const Container = styled.div`
  padding: 130px 0;
  margin: 0 auto;
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

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .line {
    width: 30px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.mainText};
  }

  span {
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;

  :hover {
    .thumb {
      transform: scale(1.1);
    }
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  cursor: pointer;
  position: relative;
  height: 500px;

  @media (max-width: 600px) {
    max-width: 90%;
  } 

  :hover {

    ::before {
      left: -25px;
      top: 25px;
    }
  }

  ::before {
    content: '';
    width: 100%;
    height: 100%;
    transition: all .2s;
    position: absolute;
    left: -15px;
    top: 15px;
    z-index: -1;
    border: 2px solid ${props => props.theme.colors.mainText};
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-position: 10%;
  background-size: cover;
  transition: all 0.2s;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    transition: all 0.2s;
    position: absolute;
    left: -15px;
    top: 15px;
    z-index: -1;
    border: 2px solid ${(props) => props.theme.colors.mainText};
  }
`;

export const AppDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 2;
  padding: 30px;
  position: absolute;
  height: 100%;
  width: 100%;
  min-width: 70%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.2s;

  :hover {
    opacity: 1;
  }

  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.8);

  .app-title {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
  }

  h2 {
    font-size: 1.5rem;
  }

  h4 {
    font-weight: 500;
    margin-top: 20px;
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

export const ProjectsMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
  margin-top: 60px;
`;

export const ProjectStatus = styled.div`
  width: 250px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.mainText};
  position: absolute;
  left: -80px;
  bottom: 30px;
  font-weight: 900;
`;
