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
} from "./styles";
import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from "../../styles/Icons";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import nookies from "nookies";
import ThemeSwitcher from "../ThemeSwitcher";

function Header(props) {
  const router = useRouter();
  const [fixed, setFixed] = useState(false);
  const { title } = useContext(ThemeContext);
  const [theme, setTheme] = useState();

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
    <Container active={fixed}>
      <Wrapper>
        <Title>
          <EntraptaWrapper onClick={() => router.push("/")}>
            <ContainerEye>
              <Eyes>
                <Light />
              </Eyes>
              <Eyes>
                <Light />
              </Eyes>
            </ContainerEye>
          </EntraptaWrapper>
        </Title>
        <HeaderMenu>
          <ul>
            <li onClick={() => router.push("/about")}>About</li>
            <li onClick={() => router.push("/blog")}>Blog</li>
            <li onClick={() => router.push("/projects")}>Projects</li>
            <li onClick={() => router.push("/contact")}>Contact</li>
          </ul>
          <ThemeSwitcher onClick={props.toggleTheme} checked={title} />
          {/* <Switch
          onChange={props.toggleTheme}
          checked={title === "light-theme"}
          checkedIcon={<GiStripedSun />}
          uncheckedIcon={<GiMoon />}
          height={10}
          width={30}
        /> */}
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
            <BsTwitter
              onClick={() =>
                window.open("https://twitter.com/m00ncoded", "_blank").focus()
              }
              size={17}
            />
          </SocialMedias>
        </HeaderMenu>
      </Wrapper>
    </Container>
  );
}

export default Header;
