import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  box-shadow: 5px 5px rgba(112, 137, 255, 0.25);
  margin-bottom: 20px;
  padding: 40px 50px;

  @media only screen and (max-width: 870px) {
    padding: 75px 15px;
  }
`;

export default Card;
