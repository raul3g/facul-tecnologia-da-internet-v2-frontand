import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import Types from "../Types";

import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

import { addPedidoSuccess, addPedidoFailure } from "./actions";

export function* addPedido({ payload }) {
  try {
    const { user_id, amount, product_id } = payload.data;

    const response = yield call(api.post, `/products/${product_id}/orders`, {
      user_id,
      amount
    });

    yield put(addPedidoSuccess(response.data));
    toast.success("Produto adicionado com sucesso");

    history.push("/order");
  } catch (err) {
    toast.error("Falha ao adicionar o produto");
    yield put(addPedidoFailure());
  }
}

export default all([takeLatest(Types.CREATE_ORDER_REQUEST, addPedido)]);
