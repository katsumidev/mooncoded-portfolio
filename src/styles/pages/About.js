import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 100%;
  gap: 50px;
  padding: 130px 0;
  margin: 0 auto;

  .colored {
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
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.mainText};
  text-align: center;
  gap: 30px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
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
`;

export const PictureContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 600px;
  height: 600px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  transition: all .2s;

  @media (max-width: 750px) {
    width: 90%;
    height: 400px;
  }

  :hover {
    margin-left: 10px;
    margin-bottom: 10px;

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

export const FirstRow = styled.div`
  width: 77%;
  margin: 0 auto;
  height: auto;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  max-width: 1950px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;

  }
`;

export const SecundaryRow = styled.div``;

export const SecundaryColumn = styled.div`
  width: 77%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1950px;

  @media (max-width: 1100px) {
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  text-align: left;
  width: 70%;
  
  @media (max-width: 1100px) {
    text-align: center;
    width: 100%;
  }
`;

export const ServicesParagraph = styled.div`
  text-align: left;
  width: 70%;
  max-width: 700px;
  margin-top: 50px;
  color: ${(props) => props.theme.colors.mainText};
  font-weight: 500;
  font-size: 1.1rem;

  @media (max-width: 1100px) {
    width: 90%;
    text-align: center;
  }
`;

export const AboutMeTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 900;

`;

export const TechsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 10px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`;

export const TechP = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1100px) {
    justify-content: center;
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const AboutMeParagraph = styled.div`
  font-size: 1.1rem;
  margin-top: 50px;
  color: ${(props) => props.theme.colors.mainText};
  font-weight: 500;
  width: 90%;
`;

export const NameTitle = styled.div`
  font-size: 6rem;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 750px) {
    font-size: 4rem;
  }

  span {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 3px ${(props) => props.theme.colors.mainText};
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  text-align: left;

  @media (max-width: 1100px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const ResumeTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h4 {
    font-size: 1.5rem;
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  p {
    color: ${(props) => props.theme.colors.mainText};
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const ExperienceContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 15px;

  .line {
    width: 100px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.mainText};
  }

  span {
  }
`;

export const CVButton = styled.button`
  width: 100%;
  max-width: 450px;
  align-self: flex-start;
  position: relative;
  padding: 20px 15px;
  border: 2px solid;
  margin-top: 15px;
  border-image: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    )
    1;
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;
  gap: 5px;

  :after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secundary}
    );
    transition: all 0.3s ease;
  }

  span {
    font-size: 1.2rem;
  }

  :hover {
    span {
      color: #fff !important;
    }
  }

  :hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
`;
