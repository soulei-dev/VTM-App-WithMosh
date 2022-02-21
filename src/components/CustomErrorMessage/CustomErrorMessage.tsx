import React, { FC } from "react";
import { StyleSheet } from "react-native";
import CustomText from "../CustomText/CustomText";

type Props = {
    error?: string;
};

const CustomErrorMessage: FC<Props> = ({ error }) => {
    if (!error) return null;
    return <CustomText style={styles.error}>{error}</CustomText>;
};

const styles = StyleSheet.create({
    error: {
        color: "red",
    },
});

export default CustomErrorMessage;
