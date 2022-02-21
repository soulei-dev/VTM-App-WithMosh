import React, { FC } from "react";
import { StyleSheet } from "react-native";
import CustomText from "../../CustomText/CustomText";

type Props = {
    error?: string;
    visible?: any;
};

const CustomErrorMessage: FC<Props> = ({ error, visible }) => {
    if (!visible || !error) return null;
    return <CustomText style={styles.error}>{error}</CustomText>;
};

const styles = StyleSheet.create({
    error: {
        color: "red",
    },
});

export default CustomErrorMessage;
