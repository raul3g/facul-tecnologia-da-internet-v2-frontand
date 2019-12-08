import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  img {
    margin: 10px 20px;
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  #description {
    font-size: 20px;
  }
  #price {
    font-size: 45px;
    color: rgba(98, 0, 238, 0.8);
  }
`;
export const FormProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  form {
    width: 100%;
    input {
      width: 100%;
      margin: 5px 0px;
      padding: 5px 15px;
      height: 30px;
      border: 1px solid rgba(98, 0, 238, 0.8);
      border-radius: 2px;
    }
    button {
      height: 40px;
      width: 100%;
      color: #ffff;
      background: rgba(98, 0, 238, 0.8);
      border: 1px solid rgba(98, 0, 238, 0.8);
      border-radius: 5px;
      transition: 0.3s ease-in-out;
      outline: none;
      :hover {
        opacity: 0.7;
        transition: 0.5s ease-in-out;
      }
    }
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
  type: "submit",
  disabled: props.loading
}))`
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
