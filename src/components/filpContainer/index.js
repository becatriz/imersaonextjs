import styled from "styled-components";

import { CardOne, CardTwo, CardThree, CardFour } from "../../components/cards";

const FlipContainer = styled.div`
  position: relative;
  width: 240px;
  height: 250px;
  perspective: 1000px;

  &:hover ${CardOne} {
    transform: rotateY(180deg);
  }

  &:hover ${CardTwo} {
    transform: rotateY(180deg);
  }

  &:hover ${CardThree} {
    transform: rotateY(180deg);
  }

  &:hover ${CardFour} {
    transform: rotateY(180deg);
  }
`;

export default FlipContainer;
