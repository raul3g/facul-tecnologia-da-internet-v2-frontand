import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px 20px;
  width: 300px;
  border-radius: 8px;
  background: #fff;
  opacity: 0.8;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: 0.3s ease;

  :hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2),
      0 12px 25px 0 rgba(0, 0, 0, 0.19);
    transition: 0.3s ease;
  }

  header {
    background: linear-gradient(rgba(98, 0, 238, 0.8), rgba(49, 27, 146, 0.8));
    border-radius: 5px 5px 0 0;
    height: 30px;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 200px;
  }
  p {
    margin: 5px 15px;
    color: #333;
    text-align: center;
    font-size: 17px;
  }
`;
export const Img = styled.div`
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
`;
