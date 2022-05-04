import React, { FC, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import OfflineNotiveBar from "./src/components/OfflineNotiveBar/OfflineNotiveBar";
import AuthContext from "./src/auth/context";
import AppNavigator from "./src/navigation/AppNavigator";

const App: FC = () => {
  const [user, setUser] = useState<any>();

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
