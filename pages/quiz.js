import styled from "styled-components";

import db from "../db.json";

import Background from "../src/components/backgound";
import Container from "../src/components/container";
import Text from "../src/components/text";
import { CardOne, CardTwo, CardThree, CardFour } from "../src/components/cards";
import {
  FlipContainerBack,
  FlipContainerFront,
} from "../src/components/flipContainerFrontAndBack";
import FlipContainer from "../src/components/filpContainer";
import { useState, useEffect } from "react";

export default function Quiz() {
  let selected;
  let pointsPlayer1 = 0;
  let pointsPlayer2 = 0;

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [indexBefore, setIndexBefore] = useState(0);
  const [comfirm, setComfirm] = useState(false);
  const [alternativeOne, setAlternativeOne] = useState("");
  const [alternativeTwo, setAlternativeTwo] = useState("");
  const [alternativeThree, setAlternativeThree] = useState("");
  const [alternativeFour, setAlternativeFour] = useState("");
  const [scorePlayer01, setScorePlayer01] = useState(0);
  const [scorePlayer02, setScorePlayer02] = useState(0);
  const [qtdConfirm, setQtdConfirm] = useState([]);

  const questions01 = db.questions[0];
  const questions02 = db.questions[1];
  const questions03 = db.questions[2];
  const questions04 = db.questions[3];

  const selectedAlternativeOne = [];
  const selectedAlternativeTwo = [];
  const selectedAlternativeThree = [];
  const selectedAlternativeFour = [];

  useEffect(() => {
    if (location.search.includes("&")) {
      let query = location.search.slice(1);
      let separator = query.split("&");
      let players = {};
      separator.forEach((valueString) => {
        let keyValue = valueString.split("=");
        let key = keyValue[0];
        let value = keyValue[1];
        players[key] = value;
      });

      setPlayer1(players.player1);
      setPlayer2(players.player2);

      return;
    }

    setPlayer1(location.search.split("=")[1]);
    setPlayer2(location.search.split("=")[1]);
  }, []);

  function handleSubmitQuiz(id) {
    setQtdConfirm([...qtdConfirm, id]);
    setComfirm(true);
    document.getElementById(id).style.transform = "rotateY(180deg)";

    scorePlayers(id);
  }

  function handleOnChange(index, id) {
    verifyID(index, id);

    if (indexBefore != index) {
      document.getElementById(`question-${index}-${id}`).style.background =
        "green";
      document.getElementById(
        `question-${indexBefore}-${id}`
      ).style.background = "#000";
      setIndexBefore(index);
    } else {
      document.getElementById(`question-${index}-${id}`).style.background =
        "green";
    }
  }

  function verifyID(index, id) {
    if (id == "1") {
      selectedAlternativeOne.push(index);
      setAlternativeOne(
        selectedAlternativeOne[selectedAlternativeOne.length - 1]
      );
    } else if (id == "2") {
      selectedAlternativeTwo.push(index);
      setAlternativeTwo(
        selectedAlternativeTwo[selectedAlternativeTwo.length - 1]
      );
    } else if (id == "3") {
      selectedAlternativeThree.push(index);
      setAlternativeThree(
        selectedAlternativeThree[selectedAlternativeThree.length - 1]
      );
    } else if (id == "4") {
      selectedAlternativeFour.push(index);
      setAlternativeFour(
        selectedAlternativeFour[selectedAlternativeFour.length - 1]
      );
    }
  }

  function scorePlayers(card) {
    switch (card) {
      case "01":
        if (alternativeOne == 2) {
          if (scorePlayer01 == 0) {
            setScorePlayer01(1);
          } else {
            pointsPlayer1 = 1 + scorePlayer01;
            setScorePlayer01(pointsPlayer1);
          }
        }

        console.log(scorePlayer01);
        break;
      case "02":
        if (alternativeTwo == 3) {
          if (scorePlayer02 == 0) {
            setScorePlayer02(1);
          } else {
            pointsPlayer2 = 1 + scorePlayer02;
            setScorePlayer02(pointsPlayer2);
          }
        }
        break;
      case "03":
        if (alternativeThree == 1) {
          if (scorePlayer01 == 0) {
            setScorePlayer01(1);
          } else {
            pointsPlayer1 = 1 + scorePlayer01;
            setScorePlayer01(pointsPlayer1);
          }
        }
        break;
      case "04":
        if (alternativeFour == 0) {
          if (scorePlayer02 == 0) {
            setScorePlayer02(1);
          } else {
            pointsPlayer2 = 1 + scorePlayer02;
            setScorePlayer02(pointsPlayer2);
          }
        }
        break;
    }
  }

  const Alternative = styled.a`
    outline: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => `${theme.colors.primary}40`};
    padding: 10px 15px;
    margin-bottom: 8px;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: 0.3s;
    display: block;
    text-align: center;
  `;

  const Button = styled.button`
    width: 80%;
    margin: 0 auto;
    display: block;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    background-color: #245c33;
    border-radius: 10px;
    border: 0 none;
    outline: 0;
    font-family: "Comic Neue", cursive;
  `;

  const Image = styled.img`
    width: 240px;
    height: 350px;
    border-radius: 10px;
  `;

  const Scoreboard = styled.div`
    width: 50%;
    max-width: 80%;
    padding: 25px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 10px;
    @media (max-width: 600px) {
      width: 100%;
      margin-left: 40px;
      position: fixed;
      z-index: 999;
    }
  `;

  const ScoreboardText = styled.div`
    text-align: center;
    color: #000;
    font-weight: bold;
    font-size: 20px;
    font-family: "Comic Neue", cursive;
    margin-bottom: 10px;
  `;

  const Score = styled.p`
    color: #000;
    margin: 0 auto;
    text-align: center;
    justify-content: space-between;
  `;

  return (
    <Background>
      <Scoreboard>
        <ScoreboardText>Placar</ScoreboardText>
        <Score>
          {player1} {scorePlayer01} X {scorePlayer02} {player2}
        </Score>
      </Scoreboard>
      <Container>
        <FlipContainer>
          <CardOne id="01">
            <FlipContainerFront>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitQuiz("01");
                }}
              >
                <Text>Question for {player1}</Text>
                <br />
                <Text>{questions01.title}</Text>
                <br />
                {questions01.alternatives.map((value, index) => {
                  return (
                    <div
                      style={{ background: "#000" }}
                      id={`question-${index}-1`}
                      key={index}
                    >
                      <Alternative as="label" hatmlFor="alternative">
                        <input
                          key={index}
                          style={{ display: "none" }}
                          name={`question-${index}`}
                          type="radio"
                          id={`question-${index}`}
                          value={index}
                          checked={selected == index}
                          onChange={(e) => {
                            handleOnChange(index, "1");
                          }}
                        ></input>
                        {value}
                      </Alternative>
                    </div>
                  );
                })}
                <Button type="submit">Confirmar</Button>
              </form>
            </FlipContainerFront>
            <FlipContainerBack>
              {alternativeOne == 2 && comfirm && (
                <Image src="https://media.giphy.com/media/10pHteyVCBH6uI/giphy.gif"></Image>
              )}
              {alternativeOne != 2 && comfirm && (
                <Image src="https://media.giphy.com/media/haZOqHKz9tTfW/giphy.gif"></Image>
              )}
            </FlipContainerBack>
          </CardOne>
        </FlipContainer>
        <FlipContainer>
          <CardTwo id="02">
            <FlipContainerFront>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitQuiz("02");
                }}
              >
                <Text>Question for {player2}</Text>
                <br />
                <Text>{questions02.title}</Text>
                <br />
                {questions02.alternatives.map((value, index) => {
                  return (
                    <div
                      style={{ background: "#000" }}
                      id={`question-${index}-2`}
                      key={index}
                    >
                      <Alternative as="label" hatmlFor="alternative">
                        <input
                          key={index}
                          style={{ display: "none" }}
                          name="02"
                          type="radio"
                          id={`question-${index}`}
                          value={index}
                          checked={selected == index}
                          onChange={(e) => {
                            handleOnChange(index, "2");
                          }}
                        ></input>
                        {value}
                      </Alternative>
                    </div>
                  );
                })}
                <Button type="submit">Confirmar</Button>
              </form>
            </FlipContainerFront>
            <FlipContainerBack>
              {alternativeTwo == 3 && comfirm && (
                <Image src="https://media.giphy.com/media/10pHteyVCBH6uI/giphy.gif"></Image>
              )}
              {alternativeTwo != 3 && comfirm && (
                <Image src="https://media.giphy.com/media/haZOqHKz9tTfW/giphy.gif"></Image>
              )}
            </FlipContainerBack>
          </CardTwo>
        </FlipContainer>
        <FlipContainer>
          <CardThree id="03">
            <FlipContainerFront>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitQuiz("03");
                }}
              >
                <Text>Question for {player1}</Text>
                <br />
                <Text>{questions03.title}</Text>
                <br />
                {questions03.alternatives.map((value, index) => {
                  return (
                    <div
                      style={{ background: "#000" }}
                      id={`question-${index}-3`}
                      key={index}
                    >
                      <Alternative as="label" hatmlFor="alternative">
                        <input
                          key={index}
                          style={{ display: "none" }}
                          name={`question-${index}`}
                          type="radio"
                          id={`question-${index}`}
                          value={index}
                          checked={selected == index}
                          onChange={(e) => {
                            handleOnChange(index, "3");
                          }}
                        ></input>
                        {value}
                      </Alternative>
                    </div>
                  );
                })}
                <Button type="submit">Confirmar</Button>
              </form>
            </FlipContainerFront>
            <FlipContainerBack>
              {alternativeThree == 1 && comfirm && (
                <Image src="https://media.giphy.com/media/10pHteyVCBH6uI/giphy.gif"></Image>
              )}
              {alternativeThree != 1 && comfirm && (
                <Image src="https://media.giphy.com/media/haZOqHKz9tTfW/giphy.gif"></Image>
              )}
            </FlipContainerBack>
          </CardThree>
        </FlipContainer>
        <FlipContainer>
          <CardFour id="04">
            <FlipContainerFront>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitQuiz("04");
                }}
              >
                <Text>Question for {player2}</Text>
                <br />
                <Text>{questions04.title}</Text>
                <br />
                {questions04.alternatives.map((value, index) => {
                  return (
                    <div
                      style={{ background: "#000" }}
                      id={`question-${index}-4`}
                      key={index}
                    >
                      <Alternative as="label" hatmlFor="alternative">
                        <input
                          key={index}
                          style={{ display: "none" }}
                          name={`question-${index}`}
                          type="radio"
                          id={`question-${index}`}
                          value={index}
                          checked={selected == index}
                          onChange={(e) => {
                            handleOnChange(index, "4");
                          }}
                        ></input>
                        {value}
                      </Alternative>
                    </div>
                  );
                })}
                <div>
                  <Button type="submit">Confirmar</Button>
                </div>
              </form>
            </FlipContainerFront>
            <FlipContainerBack>
              {alternativeFour == 0 && comfirm && (
                <Image src="https://media.giphy.com/media/10pHteyVCBH6uI/giphy.gif"></Image>
              )}
              {alternativeFour != 0 && comfirm && (
                <Image src="https://media.giphy.com/media/haZOqHKz9tTfW/giphy.gif"></Image>
              )}
            </FlipContainerBack>
          </CardFour>
        </FlipContainer>
      </Container>
    </Background>
  );
}
