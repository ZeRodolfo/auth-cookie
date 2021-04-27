import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import * as authActions from "../../store/modules/auth/actions";
import { getSlug, getHost } from "../../utils/getHost";
import Cookies from "js-cookie";


function Login() {
  const [email, setEmail] = useState("zin.valadares@solides.com.br");
  const [password, setPassword] = useState("a32658462");

  const dispatch = useDispatch();

  useEffect(() => {
    const cookie = Cookies.get("authentication");
    console.log("co", cookie);
  }, []);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log(email, password);
        dispatch(authActions.signIn(email, password));
      }}
    >
      {getSlug()} => {getHost()}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Entrar" />
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  // permission: state.auth.authentication.permissions,
  // token: state.auth.authentication.token,
});

export default connect(mapStateToProps)(Login);
