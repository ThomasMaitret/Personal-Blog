import styled from "styled-components";
import userConfig from "../../../config";

const Article = styled.article`
  color: #555;
  font-size: 16px;

  a {
    color: ${userConfig.primaryColor};
    background-color: rgba(187, 239, 253, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    color: #1a1a1a;
    text-decoration: none;

    &:hover {
      background-color: #bbeffd;
      border-bottom-color: #1a1a1a;
    }
  }

  h1 {
    color: #3e465b;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 50px 15px;
  }

  h2 {
    color: #3e465b;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 50px 15px;
  }

  h3 {
    color: #3e465b;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 50px 15px;
  }

  h4 {
    color: #3e465b;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 50px 15px;
  }

  h5,
  h6 {
    color: #3e465b;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 50px 15px;
  }

  p {
    line-height: 1.7;
    margin: 15px 50px;
  }

  blockquote {
    border-left: 5px solid #e0e6ed;
    line-height: 1.7;
    margin: 15px 50px 15px 75px;
    padding: 10px 10px 10px 15px;

    p {
      margin: 0;
    }
  }

  ul,
  ol {
    line-height: 1.7;
    margin: 15px 0;
    padding: 0 50px 0 100px;

    p,
    ul,
    ol {
      margin: 0;
    }

    ul,
    ol {
      padding: 0 0 0 30px;
    }
  }

  img {
    margin: 15px 0;
  }
`;

export default Article;
