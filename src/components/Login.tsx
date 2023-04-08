import { useDispatch } from "react-redux";
import type { appDispatch } from "../store";
import { userActions } from "../store/reducers/user";

const Login: React.FC = () => {
  const dispatch: appDispatch = useDispatch();
  return (
    <div>
      <h1>Login page</h1>
      <button
        onClick={() =>
          dispatch(
            userActions.add({
              name: "enoch",
              age: 26,
              email: "mmejuenoch@gmail.com",
            })
          )
        }
      >
        Log in
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(userActions.remove())}>Log out</button>
    </div>
  );
};

export default Login;
