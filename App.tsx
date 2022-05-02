import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import NetInfo from "@react-native-community/netinfo";
import OfflineNotiveBar from "./src/components/OfflineNotiveBar/OfflineNotiveBar";

const App: FC = () => {
  return (
    <>
      <OfflineNotiveBar />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
