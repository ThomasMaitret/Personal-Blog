import styled from "styled-components";
import GatsbyLink from "gatsby-link";
import userConfig from "../../../config";

const ContinueReading = styled(GatsbyLink)`
  color: #333;
  display: inline-block;
  font-size: 15px;
  margin-top: 50px;

  &:hover {
    color: ${userConfig.primaryColor};
  }
`;

export default ContinueReading;
