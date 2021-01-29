import styled from "styled-components";

import ContainerHome from "../src/components/containerHome";

import { useRouter } from "next/router";
import { useState } from "react";

const BackgroundHome = styled.div`
  background: url("https://cdn.pixabay.com/photo/2019/10/20/21/21/close-up-4564714_960_720.jpg");
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
  font-family: "Comic Neue", cursive;
`;

const Input = styled.input`
  margin: 0 auto;
  display: block;
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  border: 0 none;
  outline: 0;
  text-align: center;
  font-family: "Comic Neue", cursive;
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
  background-color: #7a172a;
  border-radius: 10px;
  border: 0 none;
  outline: 0;
  font-family: "Comic Neue", cursive;

  &:hover {
    transition: 0.3s;
    background-color: #9c253c;
  }

  &:disabled {
    opacity: 0.3;
    background-color: grey;
    cursor: auto;
  }
`;

export default function Quiz() {
  const router = useRouter();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  return (
    <BackgroundHome>
      <ContainerHome>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(
              player1 && player2
                ? `/quiz?player1=${player1}&player2=${player2}`
                : player2
                ? `/quiz?player1=${player2}`
                : `/quiz?player1=${player1}`
            );
          }}
        >
          <Text>Nome (Player 1) </Text>
          <Input
            onChange={(e) => {
              setPlayer1(e.target.value);
            }}
          />
          <Text>Nome (Player 2) </Text>
          <Input
            onChange={(e) => {
              setPlayer2(e.target.value);
            }}
          />
          <Button type="submit" disabled={!player1 && !player2}>
            Jogar
          </Button>
        </form>
      </ContainerHome>
    </BackgroundHome>
  );
}
