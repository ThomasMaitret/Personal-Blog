import React from "react";
import userConfig from "../../../config";
import Container from "../Container";
import Social from "../Social";
import H1 from "../H1";
import P from "./P";
import Link from "./Link";
import Wrapper from "./Wrapper";

function Header({ config }) {
  const { author, tagline, social } = config;

  return (
    <Container>
      <Wrapper>
        <H1>
          <Link title="Go to homepage" to="/">
            {author}
          </Link>
        </H1>
        <P>{tagline}</P>
        {social && (
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        )}
      </Wrapper>
    </Container>
  );
}

export default Header;
