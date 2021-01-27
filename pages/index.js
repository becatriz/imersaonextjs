import styled from "styled-components";

import ContainerHome from "../src/components/containerHome";

const BackgroundHome = styled.div`
  background: url("https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447_960_720.jpg");
  flex: 1;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  color: #fff;
`;

const Text = styled.span`
  margin: 10px 0 10px 0;
  text-align: center;
  justify-content: center;
  display: block;
  color: #fff;
  font-weight: bold;
`;

const Input = styled.input`
  margin: 0 auto;
  display: block;
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  border: 0 none;
  outline: 0;
`;

const Button = styled.button`
  margin: 0 auto;
  width: 50%;
  height: 50%;
  margin-top: 50px;
  display: block;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  background-color: #16756f;
  border-radius: 10px;
  border: 0 none;
  outline: 0;
`;

export default function Quiz() {
  return (
    <BackgroundHome>
      <ContainerHome>
        {/* <Title>É hora do duelo</Title> */}
        <Text>Nome (Player 1) </Text>
        <Input></Input>
        <Text>Nome (Player 2) </Text>
        <Input></Input>
        <Button>Jogar</Button>
      </ContainerHome>
    </BackgroundHome>
  );
}
