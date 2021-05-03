export function signIn(email, password) {
  return {
      type: "@authentication/SIGN_IN_REQUEST",
      payload: { email, password },
  };
}
export function logout() {
  return {
      type: "@auth/LOGOUT_REQUEST",
  };
}