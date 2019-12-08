import styled, { css, keyframes } from "styled-components";

import { darken } from "polished";

export const Container = styled.form`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  width: 400px;
  flex-direction: column;
  #description {
    resize: "none";
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: "submit"
}))`
  margin: 5px 0 0;
  height: 44px;
  background: rgba(98, 0, 238, 0.8);
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  :hover {
    background: ${darken(0.1, "rgba(98, 0, 238, 0.8)")};
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Thumbnail = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  input {
    display: none;
  }
  background-image: url(${prop => prop.preview});
  border: 2px dashed ${props => (props.preview ? "none" : "#ccc")};
`;
