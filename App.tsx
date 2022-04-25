import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App: FC = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
