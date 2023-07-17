import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s;

  :hover {
    transform: scale(1.05);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 3px;
  height: auto;

  h2 {
    font-size: 1.5rem;
    word-wrap: break-word;
    font-weight: 900;
    color: ${(props) => props.theme.colors.mainText};
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin: 10px 0;
    color: ${(props) => props.theme.colors.mainText};
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
  align-self: flex-start;
  opacity: 0.7;
  margin: 10px 0;
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.mainText};
  gap: 5px;
`;

export const Title = styled.b`
  width: auto;
  font-size: 10px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.mainText};
  color: ${(props) => props.theme.colors.mainText};
  padding: 5px 8px;
  border-radius: 100px;
  transition: 0.2s;

  :hover {
    background-color: ${(props) => props.theme.colors.mainText};
    color: ${(props) => props.theme.colors.reverseColor};
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 15px 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: block;
  border-radius: 4px;
  width: 100%;
  height: 175px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const ImageComp = styled(Image)`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);

  ${Container}:hover & {
    opacity: 0.7;
  }
`;

export const EntraptaWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  gap: 4px;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: 0.2s;

  ${Container}:hover & {
    opacity: 1;
  }
`;
