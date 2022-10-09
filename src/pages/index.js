import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import "leaflet/dist/leaflet.css";
import { MainWrapper} from "../styles/pages/HomePage";
// import { Container } from './styles';

function Home() {
  return (
    <MainWrapper>
      <Head>
        <title>Moon Coded - Front-end developer</title>
      </Head>
      <Hero />
    </MainWrapper>
  );
}

export default Home;
