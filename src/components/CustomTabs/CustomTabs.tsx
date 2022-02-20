import React, { FC } from "react";
import { StyleSheet, View, Text, ColorValue } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "../CustomText/CustomText";
import colors from "../../config/colors";

type Props = {
    iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    colorIcon: ColorValue;
    bgColorIcon: ColorValue;
    title: string;
};

const CustomTabs: FC<Props> = ({ iconName, colorIcon, bgColorIcon, title }) => {
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
                <CustomText style={styles.title}>{title}</CustomText>
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
