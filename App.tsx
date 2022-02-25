import React, { FC, useEffect, useState } from "react";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import CustomCard from "./src/components/CustomCard/CustomCard";
import {
    Button,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    View,
    Image,
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
import * as ImagePicker from "expo-image-picker";
import CustomImageInput from "./src/components/CustomImageInput/CustomImageInput";

const App: FC = () => {
    const [imageUri, setImageUri] = useState<any>();

    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!result.granted) {
            alert("Need access!");
        }
    };

    useEffect(() => {
        requestPermission();
    }, []);

    const selectedImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    return (
        <CustomScreen>
            <CustomImageInput
                imageUri={imageUri}
                onChangeImage={selectedImage}
            />
        </CustomScreen>
    );
};

export default App;
