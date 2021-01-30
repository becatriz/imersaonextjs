import styled from "styled-components";

import ContainerHome from "../src/components/containerHome";

import { useRouter } from "next/router";
import { useState } from "react";

const BackgroundHome = styled.div`
  background-color: #111112;
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

  @media (max-width: 600px) {
    width: 100%;
  }
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
  background-color: #7272c4;
  border-radius: 10px;
  border: 0 none;
  outline: 0;
  font-family: "Comic Neue", cursive;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    transition: 0.8s;
    background-color: #5d5d99;
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
