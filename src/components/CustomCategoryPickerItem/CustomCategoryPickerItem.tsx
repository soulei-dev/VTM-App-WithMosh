import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../CustomIcon/CustomIcon";
import CustomText from "../CustomText/CustomText";

type Props = {
    item: any;
    onPress: () => void;
};

const CustomCategoryPickerItem: FC<Props> = ({ item, onPress }) => {
    return (
        <View style={styles.container}>
            <CustomIcon
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <CustomText style={styles.label}>{item.label}</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    },
});

export default CustomCategoryPickerItem;
