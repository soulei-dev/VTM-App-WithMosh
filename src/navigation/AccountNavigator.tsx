import React, { FC } from "react";
import AccountScreen from "../screens/AccountScreen/AccountScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesScreen/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
