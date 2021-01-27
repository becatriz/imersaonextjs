import styled from "styled-components";

export const CardOne = styled.div`
  width: 240px;
  height: 250px;
  background-color: #000;
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  transition: transform 0.8s;
  transform-style: preserve-3d;
  animation-name: animation01;
  animation-duration: 4s;
  animation-fill-mode: forwards;

  @keyframes animation01 {
    0% {
      left: -200px;
      top: 0px;
    }
    50% {
      left: -50px;
      top: 0px;
    }
    100% {
      left: -50px;
      top: 0px;
    }
  }
`;

export const CardTwo = styled.div`
  width: 240px;
  height: 250px;
  background-color: #9c3b3b;
  position: relative;
  border-radius: 10px;

  transition: transform 0.8s;
  transform-style: preserve-3d;

  animation-name: animation02;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  cursor: pointer;

  @keyframes animation02 {
    0% {
      left: -400px;
      top: 0px;
    }
    50% {
      left: -20px;
      top: 0px;
    }
    100% {
      left: -20px;
      top: 0px;
    }
  }
`;

export const CardThree = styled.div`
  width: 240px;
  height: 250px;
  background-color: #000;
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  transition: transform 0.8s;
  transform-style: preserve-3d;

  animation-name: animation03;
  animation-duration: 4s;
  animation-fill-mode: forwards;

  @keyframes animation03 {
    0% {
      left: -500px;
      top: 0px;
    }
    50% {
      left: 10px;
      top: 0px;
    }
    100% {
      left: 10px;
      top: 0px;
    }
  }
`;

export const CardFour = styled.div`
  width: 240px;
  height: 250px;
  background-color: #9c3b3b;
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  transition: transform 0.8s;
  transform-style: preserve-3d;

  animation-name: animation04;
  animation-duration: 4s;
  animation-fill-mode: forwards;

  @keyframes animation04 {
    0% {
      left: -600px;
      top: 0px;
    }
    50% {
      left: 40px;
      top: 0px;
    }
    100% {
      left: 40px;
      top: 0px;
    }
  }
`;
