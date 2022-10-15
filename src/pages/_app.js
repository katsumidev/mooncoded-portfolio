import GlobalStyle from "../styles/global";
import "../styles/dracula.css";
import Header from "../components/Header";
import { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import nookies from "nookies";
import CustomCursor from "../components/CustomCursor";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import { OrbitControls } from "@react-three/drei";
import Head from "next/head";
import lines from "/public/static/assets/back.png";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const { theme } = nookies.get("theme");

    if (theme) {
      nookies.set(
        {},
        "theme",
        JSON.stringify(theme === `"dark"` ? "light" : "dark")
      );
    } else {
      nookies.set(
        { maxAge: 30 * 24 * 60 * 60 },
        "theme",
        JSON.stringify("dark")
      );
    }

    setTheme(theme === `"dark"` ? dark : light);
  }, theme);

  const toggleTheme = () => {
    const { theme } = nookies.get("theme");

    if (theme) {
      nookies.set(
        {},
        "theme",
        JSON.stringify(theme === `"dark"` ? "light" : "dark")
      );
    } else {
      nookies.set(
        { maxAge: 30 * 24 * 60 * 60 },
        "theme",
        JSON.stringify("dark")
      );
    }

    setTheme(theme === `"dark"` ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Moon Coded</title>
      </Head>
      <Lines image={lines} />
      {theme === dark ? (
        <>
          <CanvasContainer>
            <Canvas
              camera={{ fov: 70, position: [0, 0, 30] }}
              onCreated={({ gl, size, camera }) => {
                if (size.width < 600) {
                  camera.position.z = 45;
                }
              }}
            >
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.5}
                rotateSpeed={0.1}
              ></OrbitControls>
              <Scene />
            </Canvas>
          </CanvasContainer>
        </>
      ) : (
        <></>
      )}
      <CustomCursor />
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export const Lines = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent url(${(props) => props.image.src});
  background-repeat: space;
  background-size: 80vh;
  background-repeat: repeat-y;
  background-position: 0px 80px;
  opacity: 0.01;
  visibility: visible;
  z-index: -1;
  top: 0;
  left: 50px;
  overflow: hidden;
`;

export const CanvasContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  visibility: visible;
  background: transparent;
  opacity: 0.3;
  z-index: -1;
`;

export default MyApp;
