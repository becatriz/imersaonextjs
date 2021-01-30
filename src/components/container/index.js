import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: 10%;
  background-color: #ffff;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 88%;
  border: 1px solid #5d5d99;
  box-shadow: 5px 10px #5d5d99;
  border-radius: 10px;

  @media (max-width: 600px) {
    background-color: #111112;
    width: 100%;
    display: block;
  }
`;

export default Container;
