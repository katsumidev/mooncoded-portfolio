import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px;
  height: 50px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
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
    gap: 20px;
    align-items: center;

    li {
      cursor: pointer;
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    cursor: pointer;
    transition: .2s;

    :hover {
      filter: drop-shadow(0 0 2px #f6328f);
      fill: var(--primary-color);
    }
  }
`