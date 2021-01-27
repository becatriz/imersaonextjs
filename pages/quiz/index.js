import Background from "../src/components/backgound";
import Container from "../src/components/container";
import Text from "../src/components/text";
import FlipContainer from "../src/components/filpContainer";
import { CardOne, CardTwo, CardThree, CardFour } from "../src/components/cards";
import {
  FlipContainerBack,
  FlipContainerFront,
} from "../src/components/flipContainerFrontAndBack";

export default function Quiz() {
  return (
    <Background>
      <Container>
        <FlipContainer>
          <CardOne>
            <FlipContainerFront>
              <Text>Question</Text>
            </FlipContainerFront>
            <FlipContainerBack>
              <Text>Answer</Text>
            </FlipContainerBack>
          </CardOne>
        </FlipContainer>
        <FlipContainer>
          <CardTwo>
            <FlipContainerFront>
              <Text>Question</Text>
            </FlipContainerFront>
            <FlipContainerBack>
              <Text>Answer</Text>
            </FlipContainerBack>
          </CardTwo>
        </FlipContainer>
        <FlipContainer>
          <CardThree>
            <FlipContainerFront>
              <Text>Question</Text>
            </FlipContainerFront>
            <FlipContainerBack>
              <Text>Answer</Text>
            </FlipContainerBack>
          </CardThree>
        </FlipContainer>
        <FlipContainer>
          <CardFour>
            <FlipContainerFront>
              <Text>Question</Text>
            </FlipContainerFront>
            <FlipContainerBack>
              <Text>Answer</Text>
            </FlipContainerBack>
          </CardFour>
        </FlipContainer>
      </Container>
    </Background>
  );
}
