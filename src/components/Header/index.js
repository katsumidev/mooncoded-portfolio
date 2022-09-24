import React from "react";
import { Container, Title, HeaderMenu, SocialMedias } from "./styles";
import { BsInstagram, BsGithub, BsTwitter } from "../../styles/Icons";

function Header() {
  return (
    <Container>
      <Title>
        <img src="/static/assets/mainLogo.png" width="50" />
      </Title>
      <HeaderMenu>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
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
