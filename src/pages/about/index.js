import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import SkillCard from "../../components/SkillCard";
import {
  Container,
  AboutMe,
  Skills,
  FirstRow,
  PictureContainer,
  AboutMeTitle,
  AboutMeParagraph,
  FirstColumn,
  ResumeTitle,
  CVButton,
  NameTitle,
  ExperienceContainer,
  CVContainer,
  SecundaryRow,
  SecundaryColumn,
  TitleContainer,
  ServicesParagraph,
  TechsContainer,
  TechP
} from "../../styles/pages/About";
import { motion } from "framer-motion";
import {IoLogoJavascript, IoLogoReact, IoLogoPython, IoLogoFigma, } from "react-icons/io"
import {FaReact, FaFigma, FaNodeJs} from "react-icons/fa"
import { BsFileText, BsFillFileTextFill } from "react-icons/bs";
import {SiTypescript} from "react-icons/si"
import { useRouter } from "next/router";

function About() {
  const router = useRouter()

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
        <title>Moon Coded — About Me</title>
      </Head>
      <PageTitle
        title="about"
        stretchedLetter="b"
        overlayTitle="techs | experiences | skills"
      />
      <AboutMe>
        <FirstRow>
          <PictureContainer src="/static/assets/pfp.jpg" />
          <FirstColumn>
            <AboutMeTitle>Hello 👋</AboutMeTitle>
            <NameTitle>
              I'm <span>MOON</span>
            </NameTitle>
            <AboutMeTitle>
              A <span className="colored">freelancer</span> Software Developer / UI - UX Designer.
            </AboutMeTitle>
            <AboutMeParagraph>
              I am a Full-Stack developer and UI/UX Designer passionate about
              bringing digital products to life. My goal is to transform
              innovative ideas into functional and engaging experiences. I focus
              particularly on developing dynamic and responsive interfaces, as
              well as creating performant and SEO-optimized websites to ensure
              my clients' projects stand out online. By combining my expertise
              in front-end and back-end development, I can ensure that the
              digital products I create not only have a stunning appearance but
              are also efficient and user-friendly.
            </AboutMeParagraph>
            {/* <ResumeTitle>
              <BsFileText size={30} />
              <h4>Past Experience</h4>
            </ResumeTitle> */}
            <ExperienceContainer>
              <div className="line"></div>
              <span>Past Experiences</span>
            </ExperienceContainer>
            <CVContainer>
              <p>Want to know more about my education and experience.</p>
              <CVButton onClick={() => router.push("/static/files/curriculum_vitae.pdf")}>
                <span>Download CV</span>
              </CVButton>
            </CVContainer>
          </FirstColumn>
        </FirstRow>
        <SecundaryColumn>
          <TitleContainer>
            <NameTitle>
              My <span>SERVICES</span>
            </NameTitle>
            <AboutMeTitle>
              Empowering <span className="colored">Success</span> through Efficient Collaboration: Leveraging the
              Right Tools and Structured Processes
            </AboutMeTitle>
          </TitleContainer>
          <ServicesParagraph>
            As a freelancer, I have been able to make valuable contributions to
            noteworthy projects, leveraging my knowledge and skills to drive
            their success. My diverse background has equipped me to tackle
            complex challenges across different industries, adapting to the
            specific needs of each client. If you're looking for a <span className="colored">dedicated
            professional</span> committed to delivering exceptional results, I'm here
            to help. <span className="colored">Get in touch</span> to discuss how I can contribute to the success
            of your next project.
          </ServicesParagraph>
          <ExperienceContainer>
              <div className="line"></div>
              <span>My Skills</span>
            </ExperienceContainer>
          <TechsContainer>
            <TechP>
              <IoLogoJavascript />
              <span>Javascript ES6+</span>
            </TechP>
            <TechP>
              <FaReact />
              <span>React.Js</span>
            </TechP>
            <TechP>
              <FaFigma />
              <span>Figma</span>
            </TechP>
            <TechP>
              <IoLogoPython />
              <span>Python</span>
            </TechP>
            <TechP>
              <SiTypescript />
              <span>Typscript</span>
            </TechP>
            <TechP>
              <FaNodeJs />
              <span>Node.Js</span>
            </TechP>
          </TechsContainer>
        </SecundaryColumn>
      </AboutMe>
    </Container>
  );
}

export default About;
