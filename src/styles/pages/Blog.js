import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  margin: 20px auto;
  display: flex;

  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PostData = styled.div`
  width: 100%;
  padding: 1rem;

  span {
    display: flex;

    svg {
      fill: var(--gray);
      margin: 0 5px 0 0;
    }
  }

  sub {
    color: var(--gray);
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
    border: 0.125rem solid var(--gray);
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
    color: red;
    transition: 0.2s;

    :hover {
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 5px solid black;
    margin: 1.5rem -15px;
    font-size: 12.5pt;
    padding: 0.25rem 30px;
  }

  blockquote p {
    display: inline;
  }

  code {
    background-color: var(--code-block);
    border-radius: 3px;
    color: var(--white);
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
`;
