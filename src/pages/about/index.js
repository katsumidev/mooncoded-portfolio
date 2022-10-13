import Head from "next/head";
import React from "react";
import { Fade, Zoom } from "react-reveal";
import PageTitle from "../../components/PageTitle";
import SkillCard from "../../components/SkillCard";
import { Container, AboutMe, Skills } from "./styles";

function about() {
  const data = {
    cardOne: {
      title: "Frameworks",

      first: {
        alt: "ReactJS",
        icon: "reacticon.png",
      },
      second: {
        alt: "NextJS",
        icon: "nextjs.png",
      },
      third: {
        alt: "Bootstrap",
        icon: "bootstrap.png",
      },
    },
    cardTwo: {
      title: "Languages",

      first: {
        alt: "JavaScript",
        icon: "javascript.png",
      },
      second: {
        alt: "Python",
        icon: "python.png",
      },
      third: {
        alt: "Sass",
        icon: "sass.png",
      },
    },
    cardThree: {
      title: "Tools",

      first: {
        alt: "Linux",
        icon: "linux.png",
      },
      second: {
        alt: "NodeJS",
        icon: "node.png",
      },
      third: {
        alt: "Mongo Database",
        icon: "mongodb.svg",
      },
    },
  };
  return (
    <Container>
      <Head>
        <title>Moon Coded - About Me</title>
      </Head>
      <PageTitle
        title="about"
        stretchedLetter="b"
        overlayTitle="techs | experiences | skills"
      />
      <AboutMe>
        <div>
          <Fade delay={300}>
            <h1>
              👋 Hi! I'm <span>Moon</span>, a software developer
            </h1>
          </Fade>
          <Fade delay={300}>
            <p>
              I've benn studying software development since 2018, I'm passionate
              about solving problems and facing challenges, that's why I love
              technology and software development since I was a child, I always
              trying to work and study the most diverse types of technology that
              I can.
            </p>
            <p>
              I'm a quick learner, it doesn't matter if I dont know... i can
              learn. I am currently focused on <span>web development</span>{" "}
              using technologies such as:
            </p>
          </Fade>
        </div>
        <Zoom delay={300}>
          <Skills>
            <SkillCard data={data.cardOne} />
            <SkillCard data={data.cardTwo} />
            <SkillCard data={data.cardThree} />
          </Skills>
        </Zoom>

        <div>
          <Fade delay={300}>
            <p>
              I LOVE to create new and different things from scratch, that's why
              I've chosen the development career, tech makes possible to create
              an infinitude of things, things that help society in every kind of
              way, since from entertaining to medicine, with technology
              EVERYTHING is possible ✨ I'm obsessed with technology, maybe a
              little too much :p
            </p>
          </Fade>
        </div>
      </AboutMe>
    </Container>
  );
}

export default about;
