import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "../../store/modules/auth/actions";

import api from "../../services/api";

export default function Header() {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  const { user_id } = useSelector(state => state.auth);
  useEffect(() => {
    async function loadingUser() {
      const res = await api.get(`/users/${user_id}`);

      setUser(res.data);
    }

    loadingUser();
  }, [user_id]);

  function handleExit() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img
            src="https://png.pngtree.com/element_our/png/20180911/background-material-design-for-lorem-ipsum-logo-png_89719.jpg"
            alt="GoBarber"
          />
          <Link to="/home">INICIO</Link>
          <Link to="/product">PRODUCTOS</Link>
          <Link to="/order">PEDIDOS</Link>
        </nav>

        <aside>
          <Profile>
            <strong> {user && user.name} </strong>

            <Link to="/" onClick={handleExit}>
              <FaSignOutAlt color="red" size={24} />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
