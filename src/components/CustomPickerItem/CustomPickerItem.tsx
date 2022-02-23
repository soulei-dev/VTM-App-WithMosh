import React, { FC } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "../CustomText/CustomText";

type Props = {
    item: any;
    onPress: () => void;
};

const CustomPickerItem: FC<Props> = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <CustomText style={styles.text}>{item.label}</CustomText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
});

export default CustomPickerItem;
