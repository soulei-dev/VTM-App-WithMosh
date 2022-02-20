import React, { FC } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
    onPress: () => void;
};

const ListItemDeleteAction: FC<Props> = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deleteAction}>
                <MaterialCommunityIcons
                    name="trash-can"
                    color={colors.white}
                    size={35}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    deleteAction: {
        width: 70,
        backgroundColor: colors.danger,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ListItemDeleteAction;
