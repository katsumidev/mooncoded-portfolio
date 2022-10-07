import React, { useContext, useEffect, useState } from "react";
import { Container, Title, HeaderMenu, SocialMedias } from "./styles";
import Link from "next/link";
import * as Scroll from "react-scroll";
import Switch from "react-switch";
import { BsInstagram, BsGithub, BsTwitter, GiMoon, GiStripedSun } from "../../styles/Icons";
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
          <li onClick={() => router.push("/blog")}>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
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
