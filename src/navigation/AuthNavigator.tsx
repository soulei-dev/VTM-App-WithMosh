import React, { FC } from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen/ListingDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "../navigation/AppNavigator";

type Props = {};

const Stack = createStackNavigator();

const AuthNavigator: FC<Props> = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Listings"
      component={AppNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
