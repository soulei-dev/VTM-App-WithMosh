import React, { FC, useState } from "react";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import CustomCard from "./src/components/CustomCard/CustomCard";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen/ListingDetailsScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen/ViewImageScreen";
import MessagesScreen from "./src/screens/MessagesScreen/MessagesScreen";
import AccountScreen from "./src/screens/AccountScreen/AccountScreen";
import CustomIcon from "./src/components/CustomIcon/CustomIcon";
import CustomScreen from "./src/components/CustomScreen/CustomScreen";
import ListItem from "./src/components/ListItem/ListItem";
import ListingsScreen from "./src/screens/ListingsScreen/ListingsScreen";
import CustomInput from "./src/components/CustomInput/CustomInput";
import CustomPicker from "./src/components/CustomPicker/CustomPicker";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import ListingEditScreen from "./src/screens/ListingEditScreen/ListingEditScreen";
import ListItemSeparator from "./src/components/ListItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "./src/components/ListItemDeleteAction/ListItemDeleteAction";

const items = [
    { title: "T1", subtitle: "D1", image: require("./src/assets/148327.jpg") },
    { title: "T2", subtitle: "D2", image: require("./src/assets/219857.png") },
];

const App: FC = () => {
    return (
        <CustomScreen>
            <FlatList
                data={items}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <ListItem
                        showChevron
                        title={item.title}
                        subTitle={item.subtitle}
                        image={item.image}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => console.log(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </CustomScreen>
    );
};

export default App;
