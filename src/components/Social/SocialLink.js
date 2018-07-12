import styled from "styled-components";

const SocialLink = styled.a`
  color: #406291;
  display: inline-block;
  margin: 3px;
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    color: #21487e !important;

    svg {
      stroke: #21487e;
    }
  }

  svg {
    display: inline-block;
    height: 22px;
    stroke: #406291;
    width: 22px;
  }
`;

export default SocialLink;
