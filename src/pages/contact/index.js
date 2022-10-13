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
} from "./styles";
import dynamic from "next/dynamic";
import emailjs from "emailjs-com";
import { Fade, Zoom } from "react-reveal";
import Head from "next/head";
import PageTitle from "../../components/PageTitle";

function contact() {
  const Map = useMemo(() =>
    dynamic(() => import("../../components/Map"), { ssr: false })
  );

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
                <InputData>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Your name"
                    required
                  ></Input>
                  <div className="underline"></div>
                </InputData>
                <InputData>
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
                <InputData name="subject" className="full-fill">
                  <Input type="text" placeholder="Subject" required></Input>
                  <div className="underline"></div>
                </InputData>
                <InputData className="full-fill">
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

export default contact;
