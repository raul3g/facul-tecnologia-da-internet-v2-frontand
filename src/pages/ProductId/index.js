import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Content, Info, FormProduct, SubmitButton } from "./styles";
import { FaSpinner } from "react-icons/fa";
import api from "../../services/api";

import { store } from "../../store";
import { addPedido } from "../../store/modules/orders/actions";

export default function ShowProduct({ match }) {
  const [product, setProduct] = useState(null);
  const [caunt, setCaunt] = useState(1);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.order.loading);

  useEffect(() => {
    async function getProduct() {
      const id = parseInt(match.params.id);

      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    getProduct();
  }, [match.params.id]);

  const handleComprar = async e => {
    e.preventDefault();

    const { user_id } = store.getState().auth;

    dispatch(addPedido({ user_id, amount: caunt, product_id: product.id }));
  };

  return (
    <Container>
      {product && (
        <Content>
          <img src={product.files.url} alt="" />
          <Info>
            <p id="description">{product.name}</p>
            <p id="description">{product.description}</p>
            <p id="price"> R${product.price} </p>
            <FormProduct>
              <form onSubmit={e => handleComprar(e)}>
                <input
                  type="number"
                  min="1"
                  max={product.stocks.amount}
                  value={caunt}
                  onChange={e => setCaunt(parseInt(e.target.value))}
                  placeholder="Quantidade"
                  required
                />

                <SubmitButton type="submit">
                  {loading && loading ? (
                    <FaSpinner color="#FFF" size={14} />
                  ) : (
                    "Adicionar ao carrinho"
                  )}
                </SubmitButton>
              </form>
            </FormProduct>
          </Info>
        </Content>
      )}
    </Container>
  );
}
