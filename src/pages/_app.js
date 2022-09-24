import GlobalStyle from "../styles/global";
import "../styles/dracula.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
