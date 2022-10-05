import GlobalStyle from "../styles/global";
import "../styles/dracula.css";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import nookies from "nookies";
import LoadingOverlay from "../components/LoadingOverlay";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
      nookies.set({maxAge: 30 * 24 * 60 * 60}, "theme", JSON.stringify("dark"));
    }

    setTheme(theme === `"dark"` ? light : dark);
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
      nookies.set({maxAge: 30 * 24 * 60 * 60}, "theme", JSON.stringify("dark"));
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
      {loading && <LoadingOverlay />}
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
