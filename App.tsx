import React, { FC, useEffect, useState } from "react";
import { Text, Button } from "react-native";
import CustomScreen from "./src/components/CustomScreen/CustomScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { RotateInUpLeft } from "react-native-reanimated";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
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

const TweetsDetails = ({ route }: any) => {
  return (
    <CustomScreen>
      <Text>Tweets Details {route.params.id}</Text>
    </CustomScreen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetsDetails"
        component={TweetsDetails}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
        }}
      />
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
