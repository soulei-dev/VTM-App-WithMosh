import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

interface ScreenProps {
    children: any;
}

const Screen = ({ children }: ScreenProps): JSX.Element => {
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
    },
});

export default Screen;
