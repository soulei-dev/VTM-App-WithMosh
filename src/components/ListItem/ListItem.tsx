import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

interface ListItemProps {
    title: string;
    subTitle: string;
    image: any;
}

const ListItem = ({ title, subTitle, image }: ListItemProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.gray,
    },
});

export default ListItem;
