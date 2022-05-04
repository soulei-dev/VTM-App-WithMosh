import React, { FC, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import OfflineNotiveBar from "./src/components/OfflineNotiveBar/OfflineNotiveBar";
import AuthContext from "./src/auth/context";
import AppNavigator from "./src/navigation/AppNavigator";
import authStorage from "./src/auth/storage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

const App: FC = () => {
  const [user, setUser] = useState<any>();
  const [isReady, setIsReady] = useState<boolean>(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

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
