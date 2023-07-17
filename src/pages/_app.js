import GlobalStyle from "../styles/global";
import "../styles/dracula.css";
import Header from "../components/Header";
import { useRouter } from "next/router";
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
import lines from "/public/static/assets/back.png"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(dark);

  useEffect(() => {
    const { theme } = nookies.get("theme");

    if (theme) {
      nookies.set(
        {sameSite: true},
        "theme",
        JSON.stringify(theme === `"dark"` ? "dark" : "light")
      );
    } else {
      nookies.set(
        { maxAge: 30 * 24 * 60 * 60, sameSite: true },
        "theme",
        JSON.stringify("dark")
      );
    }

    setTheme(theme === `"dark"` ? dark : light);
  }, [theme]);


  const toggleTheme = () => {
    const { theme } = nookies.get("theme");

    if (theme) {
      nookies.set(
        {sameSite: true},
        "theme",
        JSON.stringify(theme === `"dark"` ? "light" : "dark")
      );
    } else {
      nookies.set(
        { maxAge: 30 * 24 * 60 * 60, sameSite: true },
        "theme",
        JSON.stringify("dark")
      );
    }

    setTheme(theme === `"dark"` ? light : dark);
  };

  useEffect(() => {
    let timer;

    const handleStart = () => {
      timer = setTimeout(() => {
        setLoading(true);
      }, 300);
    };

    const handleComplete = () => {
      if (timer) {
        clearTimeout(timer);
      }

      setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);

      if (timer) {
        clearTimeout(timer);
      }

      setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, 1000);
    };
  });

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

export const Dots = styled.div`
position: fixed;
  width: 300vw;
  height: 300vh;
  left: -100%;
  background-image: radial-gradient(${props => props.theme.colors.mainText} 3px, transparent 0);
  background-size: 30px 30px;
  background-position: -10px -10px;
  opacity: 0.01;
  transform: rotate(60deg);
`

export const CanvasContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  visibility: visible;
  background-color: transparent;
  opacity: 0.1;
  z-index: -1;
`;

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)

  nookies.set(ctx, 'theme', JSON.stringify("dark"), {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })

  return { cookies }
}

export default MyApp;
