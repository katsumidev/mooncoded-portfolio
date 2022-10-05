import React, { useContext, useEffect, useState } from "react";
import { Container, Title, HeaderMenu, SocialMedias } from "./styles";
import Link from "next/link";
import * as Scroll from "react-scroll";
import Switch from "react-switch";
import { BsInstagram, BsGithub, BsTwitter } from "../../styles/Icons";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import nookies from "nookies";

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
      <Title>
        <img
          src={title === "light-theme" ? "/static/assets/mainLogo.png" : "/static/assets/whiteLogo.png"}
          alt="logo"
          width="40"
          onClick={() => router.push("/")}
        />
      </Title>
      <HeaderMenu>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <Switch
          onChange={props.toggleTheme}
          checked={title === "light-theme"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={30}
          handleDiameter={10}
        />
        <SocialMedias>
          <BsGithub
            onClick={() =>
              window.open("https://github.com/mooncoded", "_blank").focus()
            }
            size={17}
          />
          <BsInstagram
            onClick={() =>
              window
                .open("https://instagram.com/twil1ghtmoon", "_blank")
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
    </Container>
  );
}

export default Header;
