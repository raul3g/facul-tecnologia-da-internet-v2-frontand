import React, { useEffect, useState } from "react";

import { Container, Content, Product, Card, Info } from "./styles";
import api from "../../services/api";

import { toast } from "react-toastify";

import { FaTrashAlt, FaMehBlank, FaCartArrowDown } from "react-icons/fa";

export default function Order() {
  const [orders, setOrder] = useState([]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    async function getOrders() {
      const response = await api.get("/orders");

      setOrder(response.data);
    }
    getOrders();
  }, []);

  useEffect(() => {
    const p = orders.reduce((accA, cvA) => {
      return (
        accA +
        cvA.products.reduce((acc, cv) => {
          console.log(cv);
          return acc + cv.price * cv.OrderProduct.amount;
        }, 0)
      );
    }, 0);

    setPrice(p);
  }, [orders]);

  const handleRemoveProduct = async (order_id, id) => {
    await api.delete(`/products/${id}/orders/${order_id}`);
    const response = await api.get("/orders");

    setOrder([]);
    setOrder(response.data);
  };

  const handleComprar = async () => {
    orders.map(async order => await api.post(`/orders/${order.id}/buy`));
    setOrder([]);
    toast.success("Sucesso ao comprar o produto");
  };

  return (
    <Container>
      {orders &&
        orders.map(order => (
          <Content>
            {order.products.map(product => (
              <Card key={product.id}>
                <header>
                  <span
                    onClick={() => handleRemoveProduct(order.id, product.id)}
                  >
                    <FaTrashAlt />
                  </span>
                </header>
                <Product>
                  <img src={product.files.url} alt="" />
                  <Info>
                    <p id="description">{product.name}</p>
                    <p id="description">{product.description}</p>
                    <p className="price"> R${product.price} </p>
                    <p className="">
                      Quantidade: {product.OrderProduct.amount}
                    </p>
                  </Info>
                </Product>
              </Card>
            ))}
          </Content>
        ))}

      {price !== 0 ? (
        <>
          <div className="price">{`Total: R$${price}`}</div>
          <button type="button" onClick={handleComprar}>
            COMPRAR
          </button>
        </>
      ) : (
        <div className="alert">
          <p>
            <FaMehBlank />
          </p>
          <p>
            <FaCartArrowDown /> Carrinho vazio!!
          </p>
        </div>
      )}
    </Container>
  );
}
