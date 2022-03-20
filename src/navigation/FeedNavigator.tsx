import React, { FC } from "react";
import ListingsScreen from "../screens/ListingsScreen/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen/ListingDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FeedNavigator: FC = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
