import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import CustomText from "../CustomText/CustomText";

interface CustomPickerProps {
    icon?: any;
    placeholder: string;
}

const CustomPicker = ({
    icon,
    placeholder,
    ...props
}: CustomPickerProps): JSX.Element => {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    style={styles.icon}
                    color={colors.medium}
                />
            )}
            <CustomText style={styles.text}>{placeholder}</CustomText>
            {icon && (
                <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color={colors.medium}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 25,
        flexDirection: "row",
        backgroundColor: "#F7F4F4",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
});

export default CustomPicker;
