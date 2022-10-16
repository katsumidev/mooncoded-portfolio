import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import SkillCard from "../../components/SkillCard";
import { Container, AboutMe, Skills } from "../../styles/pages/About";
import { motion } from "framer-motion";

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
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            👋 Hi! I&apos;m <span>Moon</span>, a software developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            I&apos;ve benn studying software development since 2018, I&apos;m
            passionate about solving problems and facing challenges, that&apos;s
            why I love technology and software development since I was a child,
            I always trying to work and study the most diverse types of
            technology that I can.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I&apos;m a quick learner, it doesn&apos;t matter if I dont know... i
            can learn. I am currently focused on <span>web development</span>{" "}
            using technologies such as:
          </motion.p>
        </div>
        <Skills
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SkillCard data={data.cardOne} />
          <SkillCard data={data.cardTwo} />
          <SkillCard data={data.cardThree} />
        </Skills>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I LOVE to create new and different things from scratch, that&apos;s
            why I&apos;ve chosen the development career, tech makes possible to
            create an infinitude of things, things that help society in every
            kind of way, since from entertaining to medicine, with technology
            EVERYTHING is possible ✨ I&apos;m obsessed with technology, maybe a
            little too much :p
          </motion.p>
        </div>
      </AboutMe>
    </Container>
  );
}

export default about;
