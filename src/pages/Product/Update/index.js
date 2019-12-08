import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";

import { Container, Content, Thumbnail, SubmitButton } from "./styles";
import { FaCamera, FaSpinner } from "react-icons/fa";

import api from "../../../services/api";
import { toast } from "react-toastify";

export default function Update({ match }) {
  const [thumbnail, setThumbnail] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  const [loading, setLoading] = useState(false);

  const user_id = useSelector(state => state.auth.user_id);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("file", thumbnail);
      data.append("name", name);
      data.append("description", description);
      data.append("price", price);
      const id = parseInt(match.params.id);
      const res = await api.put(`/users/${user_id}/products/${id}`, data);
      console.log(res);
      await api.put(`/stocks/${res.data.stocks.id}`, {
        amount: stock
      });
      toast.success("Sucesso ao editar o produto");
    } catch (err) {
      toast.error("Error ao editar o produto");
    }
    setLoading(false);
  }

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);
  return (
    <Container>
      <Content onSubmit={handleSubmit}>
        <header>Editando um produto</header>

        <Thumbnail preview={preview}>
          <input
            type="file"
            required
            onChange={e => setThumbnail(e.target.files[0])}
          />
          {!preview && <FaCamera color="#ccc" color={24} />}
        </Thumbnail>
        <label htmlFor="description">
          Descrição <span>(*)</span>
        </label>
        <textarea
          style={{ resize: "none" }}
          rows="5"
          required
          id="description"
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="name">
          Name <span>(*)</span>
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="Nome do produto"
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="price">
          Preco <span>(*)</span>
        </label>
        <input
          type="number"
          id="price"
          required
          min="0"
          placeholder="Preço do produto"
          onChange={e => setPrice(e.target.value)}
        />
        <label htmlFor="stock">
          Estoque <span>(*)</span>
        </label>
        <input
          type="number"
          id="stock"
          required
          min="0"
          placeholder="Quantidade em estoque"
          onChange={e => setStock(e.target.value)}
        />
        <SubmitButton loading={loading.toString()} type="submit">
          {loading && loading ? <FaSpinner color="#FFF" size={14} /> : "EDITAR"}
        </SubmitButton>
      </Content>
    </Container>
  );
}
