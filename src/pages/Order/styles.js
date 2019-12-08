import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .price {
    font-size: 45px;
    color: rgba(98, 0, 238, 0.8);
  }
  .alert {
    text-align: center;
    color: rgba(255, 0, 0, 0.7);
    font-size: 40px;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    height: 40px;
    padding: 5px 20px;
    margin: 5px 10px;
    color: #fff;
    border: none;
    border-radius: 5px;
    background: linear-gradient(#00e676, #00c853);
    transition: 0.3s ease;
    outline: none;
    :hover {
      opacity: 0.7;
      transition: 0.3s ease;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 5px 15px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  background: #ffff;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    margin: 10px 20px;
    width: 100%;
    max-width: 500px;
    height: auto;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      background: red;
      color: #fff;
      border-radius: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      :hover {
        opacity: 0.7;
        transition: 0.3s ease;
      }
    }
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
`;
export const Product = styled.div`
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

export const RemoveCard = styled.button`
  color: red;
  background: transparent;
`;
