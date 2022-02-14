import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";
import ListItem from "../../components/ListItem/ListItem";
import colors from "../../config/colors";

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("../../assets/image.jpeg")}
            />
            <View style={styles.details}>
                <AppText style={styles.title}>One piece collection</AppText>
                <AppText style={styles.price}>30 €</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        title="Souleimane Kouygou"
                        subTitle="3 listings"
                        image={require("../../assets/148327.jpg")}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    details: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.primary,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 30,
    },
});

export default ListingDetailsScreen;
