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
import CustomImageInputList from "./src/components/CustomImageInputList/CustomImageInputList";

const App: FC = () => {
    const [imageUris, setImageUris] = useState<any>([]);

    const handleAdd = (uri: any) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: any) => {
        setImageUris(imageUris.filter((imageUri: any) => imageUri !== uri));
    };

    return (
        <CustomScreen style={styles.container}>
            {/* <CustomImageInputList
                imageUris={array}
                onRemoveImage={handleRemoveImage}
            /> */}
            <CustomImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        </CustomScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});

export default App;
