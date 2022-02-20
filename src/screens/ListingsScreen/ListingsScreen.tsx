import React, { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import CustomCard from "../../components/CustomCard/CustomCard";
import CustomScreen from "../../components/CustomScreen/CustomScreen";

const listings = [
    {
        id: 1,
        title: "One piece collection",
        price: 45,
        image: require("../../assets/image.jpeg"),
        city: "Antibes, 06600",
    },
    {
        id: 2,
        title: "Bleach",
        price: 85,
        image: require("../../assets/s-l1600.png"),
        city: "Saint-Laurent-du-Var, 06700",
    },
    {
        id: 3,
        title: "Shingeki no kyojin",
        price: 45,
        image: require("../../assets/s-l300.jpg"),
        city: "Nice, 06000",
    },
];

const ListingsScreen: FC = () => {
    return (
        <CustomScreen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <CustomCard
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        city={item.city}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </CustomScreen>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#F7F4F4",
        padding: 20,
    },
});

export default ListingsScreen;
