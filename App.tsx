import React, { FC, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import OfflineNotiveBar from "./src/components/OfflineNotiveBar/OfflineNotiveBar";
import AuthContext from "./src/auth/context";
import AppNavigator from "./src/navigation/AppNavigator";
import authStorage from "./src/auth/storage";
import jwtDecode from "jwt-decode";

const App: FC = () => {
  const [user, setUser] = useState<any>();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotiveBar />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
