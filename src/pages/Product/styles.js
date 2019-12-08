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

  form {
    width: 100%;
    margin: 90px 0 0 0;
    max-width: 500px;
    display: flex;

    div {
      padding: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(98, 0, 238, 0.8);
      border-radius: 4px;
      width: 100%;
      background: #fff;
      input {
        width: 460px;
        height: 40px;
        border: none;
        padding: 5px 15px;
        background: transparent;
      }
      button {
        height: 40px;
        outline: none;
        width: 40px;
        padding: 5px 10px;
        background: transparent;
        border: none;
      }
    }
  }
`;

export const Content = styled.form`
  display: flex;
  justify-content: center;
  margin: 15px;
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
  height: 150px;
  cursor: pointer;
  input {
    display: none;
  }
  background: url(${prop => prop.preview});
  background-size: cover;

  border: 2px dashed ${props => (props.preview ? "none" : "#ccc")};
`;
export const Codigo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Buttom = styled.button`
  background: ${props => props.color || "#ccc"};
  height: 30px;
  border: 1px solid ${props => props.color || "#ccc"};
  border-radius: 4px;
  margin: 5px 10px;
  padding: 2px 10px;
  color: #fff;
  :hover {
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }
`;
