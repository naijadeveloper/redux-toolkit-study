import { useSelector } from "react-redux";
import type { rootState } from "../store";

const Profile: React.FC = () => {
  const { name, age, email } = useSelector(
    (state: rootState) => state.userInfo.value
  );

  return (
    <div>
      <h1>Profile page</h1>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Email: {email} </p>
    </div>
  );
};

export default Profile;
