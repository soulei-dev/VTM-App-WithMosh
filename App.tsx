import React, { FC, useEffect, useState } from "react";
import { Text, Button } from "react-native";
import CustomScreen from "./src/components/CustomScreen/CustomScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

const Account = () => {
  return (
    <CustomScreen>
      <Text>Account</Text>
    </CustomScreen>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Tweets}
        options={{
          tabBarIcon: ({ size, color }: any) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const App: FC = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
