import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import colors from "../../config/colors";
import CustomText from "../CustomText/CustomText";

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
                <CustomText style={styles.title}>{title}</CustomText>
                <CustomText style={styles.price}>{`${price} €`}</CustomText>
                <View style={styles.city}>
                    <Text style={styles.labelCity}>{city}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
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
