import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

interface CustomCardProps {
    image: any;
    title: string;
    price: number;
    city: string;
}

const CustomCard = ({
    image,
    title,
    price,
    city,
}: CustomCardProps): JSX.Element => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.cardDetail}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>{`${price} €`}</AppText>
                <View style={styles.city}>
                    <Text style={styles.labelCity}>{city}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 380,
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    cardDetail: {
        padding: 20,
    },
    title: {
        marginBottom: 5,
        fontWeight: "bold",
    },
    price: {
        color: colors.primary,
        fontWeight: "bold",
    },
    city: {
        marginTop: 40,
    },
    labelCity: {
        color: "gray",
    },
});

export default CustomCard;
