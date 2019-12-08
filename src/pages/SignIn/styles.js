import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: #ffff;
  border: 1px solid #ffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    width: 150px;
    height: auto;
  }
  img {
    width: 150px;
    height: auto;
  }
  form {
    display: flex;
    align-self: stretch;
    flex-direction: column;
    input {
      height: 40px;
      background: transparent;
      margin: 5px 0;
      padding: 5px 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      ::placeholder {
        color: #333;
      }
      :focus {
        border-color: rgba(98, 0, 238, 0.8);
        transition: 0.3s ease-in;
      }
    }
  }
`;

export const Info = styled.div`
  font-size: 17px;
  margin: 10px 0;
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
