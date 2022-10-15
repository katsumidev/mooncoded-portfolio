import React, { useMemo } from "react";
import {
  Container,
  LeftContainer,
  Input,
  InputData,
  Form,
  Row,
  Column,
  TextArea,
  Main,
  SubmitButton,
  RightContainer,
} from "../../styles/pages/Contact";
import dynamic from "next/dynamic";
import emailjs from "emailjs-com";
import Head from "next/head";
import PageTitle from "../../components/PageTitle";
import { motion } from "framer-motion";

function Contact() {
  const Map = useMemo(() =>
    dynamic(() => import("../../components/Map"), { ssr: false })
  , []);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_sd8uatp",
        "template_9bkroze",
        e.target,
        "M-ZEoRP3zha0buhUy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    e.preventDefault();
  };

  return (
    <Container>
      <Head>
        <title>Moon Coded - Contact Me</title>
      </Head>
      <LeftContainer>
        <Main>
          <PageTitle
            title="contact"
            stretchedLetter="n"
            overlayTitle="freelance | questions | prices"
          />
          <Form onSubmit={sendEmail}>
            <Row>
              <InputData
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Input
                  type="text"
                  name="username"
                  placeholder="Your name"
                  required
                ></Input>
                <div className="underline"></div>
              </InputData>
              <InputData
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                ></Input>
                <div className="underline"></div>
              </InputData>
            </Row>
            <Column>
              <InputData
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                name="subject"
                className="full-fill"
              >
                <Input type="text" placeholder="Subject" required></Input>
                <div className="underline"></div>
              </InputData>
              <InputData
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="full-fill"
              >
                <TextArea
                  name="message"
                  placeholder="Message"
                  required
                ></TextArea>
                <div className="underline"></div>
              </InputData>
              <SubmitButton type="submit">
                <span>Submit</span>
              </SubmitButton>
            </Column>
          </Form>
        </Main>
      </LeftContainer>
      <RightContainer>
        <Map />
      </RightContainer>
    </Container>
  );
}

export default Contact;
