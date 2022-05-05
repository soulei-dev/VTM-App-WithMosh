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

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
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
