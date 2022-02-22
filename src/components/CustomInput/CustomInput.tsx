import React, { FC } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
    TextInputProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

export type CustomInputProps = {
    icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
} & TextInputProps;

const CustomInput: FC<CustomInputProps> = ({ icon, ...props }) => {
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
            <TextInput
                placeholderTextColor={colors.grayLight}
                style={defaultStyles.text}
                {...props}
            />
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
});

export default CustomInput;
