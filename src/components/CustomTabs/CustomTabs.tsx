import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText/AppText";
import colors from "../../config/colors";

interface CustomTabsProps {
    iconName: any;
    colorIcon: any;
    bgColorIcon: any;
    title: string;
}

const CustomTabs = ({
    iconName,
    colorIcon,
    bgColorIcon,
    title,
}: CustomTabsProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={[styles.icon, { backgroundColor: bgColorIcon }]}>
                <MaterialCommunityIcons
                    name={iconName}
                    color={colorIcon}
                    size={18}
                />
            </View>
            <View style={styles.titleContainer}>
                <AppText style={styles.title}>{title}</AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: "row",
        backgroundColor: colors.white,
    },
    icon: {
        width: 35,
        height: 35,
        borderRadius: 35,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "500",
        fontSize: 16,
    },
    titleContainer: {
        justifyContent: "center",
    },
});

export default CustomTabs;
