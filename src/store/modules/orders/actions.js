import Types from "../Types";
export function addPedido(data) {
  return {
    type: Types.CREATE_ORDER_REQUEST,
    payload: {
      data
    }
  };
}
export function addPedidoSuccess(order) {
  return {
    type: Types.CREATE_ORDER_SUCCESS,
    payload: {
      order
    }
  };
}
export function addPedidoFailure(data) {
  return {
    type: Types.CREATE_ORDER_FAILURE
  };
}
