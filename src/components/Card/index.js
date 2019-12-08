import React from "react";

import { Container } from "./styles";
import history from "../../services/history";

export default function Card({ product }) {
  const handleComprar = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <Container onClick={handleComprar}>
      <header>R$ {product.price}</header>
      <img src={product.files.url} alt="" />
      <p>{product.name}</p>
      <p>{product.description}</p>
    </Container>
  );
}
