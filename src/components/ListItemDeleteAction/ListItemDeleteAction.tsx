import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = (): JSX.Element => {
    return (
        <View style={styles.deleteAction}>
            <MaterialCommunityIcons
                name="trash-can"
                color={colors.white}
                size={35}
            />
        </View>
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
