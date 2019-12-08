import styled, { css, keyframes } from "styled-components";

import { darken } from "polished";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  flex-direction: column;

  header {
    align-self: center;
    font-size: 17px;
    font-weight: bold;
    padding: 5px 5px;
  }
  strong {
    font-size: 30px;
    letter-spacing: 2px;
  }

  label {
    color: #333;
    margin: 10px 0px 0px 0px;
    font-size: 17px;
    font-weight: bold;
    span {
      font-size: 10px;
      color: red;
      font-style: italic;
    }
  }

  textarea {
    margin: 5px 0 0;
    border-radius: 4px;
    transition: ease 0.2s;
    padding: 5px 10px;
    border: 1px solid #ccc;
    :focus {
      transition: ease-in-out 0.3s;
      border: 1px solid rgba(98, 0, 238, 0.8);
    }
  }

  input {
    margin: 5px 0 0;
    height: 40px;
    border-radius: 4px;
    font-size: 16px;
    transition: ease 0.2s;
    border: 1px solid #ccc;
    padding: 5px 10px;
    :focus {
      transition: ease-in-out 0.3s;
      border: 1px solid rgba(98, 0, 238, 0.8);
    }
  }
`;
export const Content = styled.form`
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
  background: orange;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  :hover {
    background: ${darken(0.1, "orange")};
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
