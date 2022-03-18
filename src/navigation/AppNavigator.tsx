import React, { FC } from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

type Props = {};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator: FC<Props> = () => {
  return <StackNavigator />;
};

export default AppNavigator;
