import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  padding: 130px 0;
  margin: 0 auto;
  gap: 20px;

  color: ${(props) => props.theme.colors.mainText};

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100vw;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;

  align-items: center;
`;

export const TagTitle = styled.b`
  width: auto;
  font-size: 8px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.secundaryText};
  color: ${(props) => props.theme.colors.secundaryText};
  padding: 3px 4px;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.secundaryText};
    color: ${(props) => props.theme.colors.reverseColor};
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 0 0 0;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;

  align-items: center;
  margin: 30px 0;
  padding: 16px;
  gap: 10px;
  flex-wrap: wrap;

  p {
    text-transform: uppercase;
    font-size: 13px;
    color: ${(props) => props.theme.colors.secundaryText};
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const MiddleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Divider = styled.hr`
  width: 40%;
  margin: 10px 0;
`;

export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  margin: 10px;
  text-align: center;

  span {
    display: flex;

    svg {
      fill: ${(props) => props.theme.colors.secundaryText};
      margin: 2.3px 5px 0 0;
    }

    font-size: 15px;
    gap: 10px;
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme.colors.secundaryText};
  }

  sub {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.secundaryText};
    font-weight: 400;
  }
`;

export const PostContent = styled.div`
  width: 100%;
  font-size: 14pt;
  line-height: 2rem;
  padding: 1rem;

  img {
    max-width: 100%;
  }

  hr {
    margin: 30px 0;
  }

  p {
    margin: 1rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 50px 0 30px 0;
  }

  ol,
  ul {
    margin-left: 50px;
  }

  li {
    margin: 30px 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 2px;
    margin: 0 auto;
  }

  th,
  td {
    border: 0.125rem solid ${(props) => props.theme.colors.mainText};
    padding: 3px;

    @media (min-width: 500px) {
      padding: 0.625rem 1.25rem;
    }

    @media (max-width: 250px) {
      display: none;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    transition: 0.2s;

    :hover {
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 5px solid ${(props) => props.theme.colors.mainText};
    margin: 1.5rem -15px;
    font-size: 12.5pt;
    padding: 0.25rem 30px;
  }

  blockquote p {
    display: inline;
  }

  code {
    background-color: ${(props) => props.theme.colors.codeBlock};
    border-radius: 3px;
    color: white;
    padding: 0 5px;
    font-size: 11pt;
    margin: 2px;
    white-space: pre-wrap;
  }

  pre code {
    width: auto;
    max-width: 50rem;
    float: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
    padding: 1.25rem;
  }
`;

export const PostTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 900;
  word-spacing: 3px;
  max-width: 700px;
`;

export const PostSubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  word-spacing: 3px;
  max-width: 700px;
  color: var(--gray);
`;

export const PostImage = styled.img`
  width: 100%;
  margin: 10px 0;
  border-radius: 3px;
  cursor: pointer;

  @media (max-width: 900px) {
    align-self: center;
  }
`;

export const MoreArticles = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  width: 90%;
  height: 100%;
  padding: 10px;
  max-width: 230px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  border: 1px solid ${(props) => props.theme.colors.secundaryText};
  cursor: pointer;
  

  sub {
    color: ${(props) => props.theme.colors.secundaryText};
  }
`;

export const ImageWrapper = styled.div``;

export const ImageComp = styled.img`
  border: 1px solid ${(props) => props.theme.colors.secundaryText};
  border-radius: 4px;
  width: 95%;
`;

