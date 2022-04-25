import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const App: FC = () => {
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       <AuthNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;
const App: FC = () => {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      if (value !== null) {
        JSON.parse(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  storeData();
  return null;
};

export default App;
