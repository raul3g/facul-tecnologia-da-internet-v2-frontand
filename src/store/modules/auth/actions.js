import Types from "../Types";
export function signInRequest(email, password) {
  return {
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password }
  };
}

export function signInSuccess(token, user) {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: { token, user }
  };
}

export function signFailure() {
  return {
    type: Types.SIGN_IN_FAILURE
  };
}

export function signOut() {
  return {
    type: Types.SIGN_OUT
  };
}
