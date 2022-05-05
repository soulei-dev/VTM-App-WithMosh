import { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken: string) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};

export default useAuth;
