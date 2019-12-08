import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, SubmitButton, Info } from "./styles";
import { signInRequest } from "../../store/modules/auth/actions";

import { FaSpinner } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img
        src="https://png.pngtree.com/element_our/png/20180911/background-material-design-for-lorem-ipsum-logo-png_89719.jpg"
        alt="E-commerce"
      />
      <Info>Seja bem-vindo! ;)</Info>

      <form onSubmit={e => handleSubmit(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          required
          placeholder="E-mail"
          minLength="4"
          maxLength="20"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          required
          placeholder="password"
          minLength="4"
          maxLength="20"
        />
        <SubmitButton loading={loading} type="submit">
          {loading && loading ? <FaSpinner color="#FFF" size={14} /> : "ENTRAR"}
        </SubmitButton>
      </form>
    </Container>
  );
}
