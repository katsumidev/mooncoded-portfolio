import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  right: 0;
`;

export const Map = styled(MapContainer)`
  position: absolute;
  bottom: 0;
  width: 50%;
  height: calc(100% - 60px);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ContactInfo = styled.div`
  width: 200px;
  height: 120px;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 6px;
  border: 2px solid  ${(props) => props.theme.colors.mainText};
  position: absolute;
  z-index: 1999;
  font-size: 0.8rem;
  top: 60px;
  margin: 20px;
  color: ${(props) => props.theme.colors.mainText};
  padding: 16px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;
