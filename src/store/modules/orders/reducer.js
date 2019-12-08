import produce from "immer";
import Types from "../Types";
const INITIAL_STATE = {
  loading: false
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.CREATE_ORDER_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.CREATE_ORDER_SUCCESS: {
        draft.loading = false;
        break;
      }
      case Types.CREATE_ORDER_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
