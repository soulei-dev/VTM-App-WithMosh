import React, { FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

type Props = {
    children: React.ReactNode;
    style?: any;
};

const CustomScreen: FC<Props> = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        height: "100%",
    },
    view: {
        flex: 1,
    },
});

export default CustomScreen;
