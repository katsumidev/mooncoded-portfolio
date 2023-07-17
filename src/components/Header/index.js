import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Title,
  HeaderMenu,
  SocialMedias,
  EntraptaWrapper,
  ContainerEye,
  Eyes,
  Light,
  Wrapper,
  MobileHeader,
  DesktopHeader,
  Menu,
  MobileContainer,
  BackText
} from "./styles";
import {
  BsGithub,
  BsDribbble,
  BsLinkedin,
} from "../../styles/Icons";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import nookies from "nookies";
import ThemeSwitcher from "../ThemeSwitcher";
import { Sling as Hamburger } from "hamburger-react";
import { Fade, Zoom } from "react-reveal";

function Header(props) {
  const router = useRouter();
  const [fixed, setFixed] = useState(false);
  const { title } = useContext(ThemeContext);
  const [theme, setTheme] = useState();
  const [open, setOpen] = useState();

  useEffect(() => {
    const { theme } = nookies.get("theme");
    setTheme(theme);
  }, [theme]);

  if (typeof window !== "undefined") {
    function setHeaderFixed() {
      if (window.scrollY >= 1) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    window.addEventListener("scroll", setHeaderFixed);
  }

  return (
    <Container active={fixed} open={open}>
      <Wrapper>
        <Title  onClick={() => router.push("/")}>
          <EntraptaWrapper>
            <ContainerEye>
              <Eyes>
                <Light />
              </Eyes>
              <Eyes>
                <Light />
              </Eyes>
            </ContainerEye>
          </EntraptaWrapper>
          <BackText className="back-text">
            Back home
          </BackText>
        </Title>
        <DesktopHeader>
          <HeaderMenu>
            <ul>
              <li onClick={() => router.push("/about")}>
                <span>01. </span> About
              </li>
              <li onClick={() => router.push("/projects")}>
                <span>02. </span> Projects
              </li>
                <li onClick={() => router.push("/blog")}>
                <span>03. </span> Blog
              </li>
              <li onClick={() => router.push("/contact")}>
                <span>04. </span> Contact
              </li>
            </ul>
            <ThemeSwitcher onClick={props.toggleTheme} checked={title} />
            <SocialMedias>
              <BsGithub
                onClick={() =>
                  window.open("https://github.com/mooncoded", "_blank").focus()
                }
                size={17}
              />
              <BsLinkedin
                onClick={() =>
                  window
                    .open("https://www.linkedin.com/in/mooncoded/", "_blank")
                    .focus()
                }
                size={17}
              />
              <BsDribbble
                onClick={() =>
                  window.open("https://dribbble.com/twilightmoonhex", "_blank").focus()
                }
                size={17}
              />
            </SocialMedias>
          </HeaderMenu>
        </DesktopHeader>
        <MobileContainer>
          <Menu className="menu">
            <Hamburger toggled={open} toggle={setOpen} />
          </Menu>
          {open && (
            <MobileHeader key={Math.random()}>
              <ul>
                <Fade top delay={100}>
                  <li onClick={() => router.push("/about") | setOpen(!open)}>
                    <span>01. </span> About
                  </li>
                </Fade>
                <Fade top delay={300}>
                  <li onClick={() => router.push("/projects") | setOpen(!open)}>
                    <span>02. </span> Works
                  </li>
                </Fade>
                <Fade top delay={500}>
                  <li onClick={() => router.push("/blog") | setOpen(!open)}>
                    <span>03. </span> Blog
                  </li>
                </Fade>
                <Fade top delay={1000}>
                  <li onClick={() => router.push("/contact") | setOpen(!open)}>
                    <span>04. </span> Contact
                  </li>
                </Fade>
              </ul>
              <Zoom delay={500}>
                <SocialMedias>
                  <BsGithub
                    onClick={() =>
                      window
                        .open("https://github.com/mooncoded", "_blank")
                        .focus()
                    }
                    size={17}
                  />
                  <BsLinkedin
                    onClick={() =>
                      window
                        .open(
                          "https://www.linkedin.com/in/mooncoded/",
                          "_blank"
                        )
                        .focus()
                    }
                    size={17}
                  />
                  <BsDribbble
                    onClick={() =>
                      window
                        .open("https://dribbble.com/twilightmoonhex", "_blank")
                        .focus()
                    }
                    size={17}
                  />
                  <ThemeSwitcher onClick={props.toggleTheme} checked={title} />
                </SocialMedias>
              </Zoom>
            </MobileHeader>
          )}
        </MobileContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;
