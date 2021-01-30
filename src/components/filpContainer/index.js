import styled from "styled-components";

const FlipContainer = styled.div`
  position: relative;
  width: 240px;
  height: 350px;
  perspective: 1000px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default FlipContainer;
