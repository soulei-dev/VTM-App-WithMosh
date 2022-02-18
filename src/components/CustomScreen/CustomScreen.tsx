import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

interface CustomScreenProps {
    children: any;
    style?: any;
}

const CustomScreen = ({ children, style }: CustomScreenProps): JSX.Element => {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        height: "100%",
        backgroundColor: "#F7F4F4",
    },
});

export default CustomScreen;
