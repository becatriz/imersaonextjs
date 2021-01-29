import styled from "styled-components";

import { CardOne, CardTwo, CardThree, CardFour } from "../cards";
import FlipContainer from "../filpContainer";

const RadioWrapper = styled.div`
  display: block;
`;

const Span = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #03a9f4;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

export const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Span} {
    &::after {
      width: 10px;
      height: 10px;
      opacity: 1;
      left: 12%;
      top: 12%;
    }
  }
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  ${(props) =>
    props.disabled &&
    `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`;

const RadioButton = ({ name, children }) => (
  <RadioWrapper>
    <Label>
      <Input id="switch" name={name} type="radio" />
      <Span />
      {children}
    </Label>
  </RadioWrapper>
);

export default RadioButton;
