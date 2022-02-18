import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

interface CustomScreenProps {
    children: any;
    style?: any;
}

const CustomScreen = ({ children, style }: CustomScreenProps): JSX.Element => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        height: "100%",
    },
});

export default CustomScreen;
