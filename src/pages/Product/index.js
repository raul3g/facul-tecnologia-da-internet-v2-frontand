import React, { useState, useMemo } from "react";

import { Container, Codigo, Buttom } from "./styles";

import api from "../../services/api";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import history from "../../services/history";

import Card from "../../components/Card";
import Add from "./Add";

export default function Product() {
  const [codigo, setCodigo] = useState(null);
  const [product, setProduct] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api.get(`/products/${codigo}`);
      setProduct(response.data);
    } catch (err) {
      toast.error("Produto não encontrado");
    }
  };

  const handleDeletar = async id => {
    try {
      await api.delete(`/products/${id}`);
      setProduct(null);
      toast.success("Sucesso ao deletar o produto");
    } catch (err) {
      toast.error("Error ao deletar o produto");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            style={{ border: "none" }}
            type="number"
            min="1"
            value={codigo}
            placeholder="Código do produto"
            required
            onChange={e => setCodigo(e.target.value)}
          />
          <button type="submit">
            <FaSearch color="rgba(98, 0, 238, 0.8)" size={17} />
          </button>
        </div>
      </form>

      {product && (
        <Codigo>
          <Card product={product} />
          <div>
            <Buttom
              color="orange"
              onClick={() => history.push(`/product/update/${product.id}`)}
            >
              {" "}
              Editar{" "}
            </Buttom>
            <Buttom color="red" onClick={() => handleDeletar(product.id)}>
              Deletar
            </Buttom>
          </div>
        </Codigo>
      )}

      <Add />
    </Container>
  );
}
