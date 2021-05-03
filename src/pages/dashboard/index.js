import { getSlug, getHost } from "../../utils/getHost";
import * as authActions from "../../store/modules/auth/actions";
import { useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();

  return (
    <>
      Dashboard {getSlug()} => {getHost()}

      <button onClick={() => dispatch(authActions.logout())}>Sair</button>
    </>
  );
}

export default Dashboard;
