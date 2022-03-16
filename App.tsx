import React, { FC, useEffect, useState } from "react";
import { Text, Button } from "react-native";
import CustomScreen from "./src/components/CustomScreen/CustomScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetsDetails")}
    />
  );
};

const Tweets = () => {
  return (
    <CustomScreen>
      <Text>Tweets</Text>
      <Link />
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
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
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
