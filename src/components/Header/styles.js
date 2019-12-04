import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      height: 44px;
      width: auto;
    }
    a {
      font-weight: bold;
      padding: 0px 5px;
      color: #7159c1;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  justify-content: center;
  align-items: center;
  strong {
    padding: 5px;
  }
  a {
    display: flex;
    align-items: center;
  }
`;
