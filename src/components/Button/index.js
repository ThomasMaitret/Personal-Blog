import styled from "styled-components";
import Link from "gatsby-link";

const Button = styled(Link)`
  border: 1px solid #4a6a97;
  color: #4a6a97;
  font-size: 10px;
  font-weight: 700;
  padding: 10px 20px;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.15s all ease-in-out;

  &:hover {
    border-color: #21487e;
    color: #21487e;
  }
`;

export default Button;
