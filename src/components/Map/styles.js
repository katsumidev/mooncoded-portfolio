import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  right: 0;

  @media (max-width: 750px) {
    position: relative;
    width: 100vw;
    height: 300px;
    bottom: 0;
  }
`;

export const Map = styled(MapContainer)`
  position: absolute;
  bottom: 0;
  width: 50%;
  height: calc(100% - 60px);

  @media (max-width: 750px) {
    position: relative;
    width: 100vw;
    height: 300px;
  }
`;

export const ContactInfo = styled.div`
  width: 200px;
  height: 120px;
  background-color: ${(props) => props.theme.colors.secundaryBackground};
  position: absolute;
  z-index: 100;
  font-size: 0.8rem;
  top: 60px;
  margin: 20px;
  z-index: 500;
  color: ${(props) => props.theme.colors.mainText};
  padding: 16px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;

  .email {
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 80px;
    font-size: 0.7rem;
    top: 0px;
    left: 0;
    padding: 10px;
  }
`;
