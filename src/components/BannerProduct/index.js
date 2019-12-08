import React, { useEffect, useState } from "react";

import { Container, Content } from "./styles";

import Card from "../Card";
import api from "../../services/api";

export default function BannerProduct() {
  const [products, setProduct] = useState(null);
  useEffect(() => {
    async function getProduct() {
      const response = await api.get("/products");
      setProduct(response.data);
    }

    getProduct();
  }, []);

  return (
    <Container>
      <Content>
        {products && products.map(product => <Card product={product} />)}
      </Content>
    </Container>
  );
}
