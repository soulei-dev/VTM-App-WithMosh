import React, { FC, useEffect, useState } from "react";
import { Text } from "react-native";
import CustomScreen from "./src/components/CustomScreen/CustomScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tweets = () => {
  return (
    <CustomScreen>
      <Text>Tweets</Text>
    </CustomScreen>
  );
};

const TweetsDetails = () => {
  return (
    <CustomScreen>
      <Text>Tweets Details</Text>
    </CustomScreen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
      <Stack.Screen
        name="TweetsDetails"
        component={TweetsDetails}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const App: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
