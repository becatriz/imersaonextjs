import styled from "styled-components";

export const FlipContainerFront = styled.div`
  position: absolute;
  width: 240px;
  height: 250px;
  backface-visibility: hidden;
`;

export const FlipContainerBack = styled.div`
  position: absolute;
  width: 240px;
  height: 250px;
  transform: rotateY(180deg);
`;
