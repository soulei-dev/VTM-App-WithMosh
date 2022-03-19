import React, { FC } from "react";
import { View, Image, StyleSheet } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import ListItem from "../../components/ListItem/ListItem";
import colors from "../../config/colors";

type Props = {
  route: any;
};

const ListingDetailsScreen: FC<Props> = ({ route }) => {
  return (
    <View>
      <Image style={styles.image} source={route.params.image} />
      <View style={styles.details}>
        <CustomText style={styles.title}>{route.params.title}</CustomText>
        <CustomText style={styles.price}>{route.params.price} €</CustomText>
        <CustomText>{route.params.city}</CustomText>
        <View style={styles.userContainer}>
          <ListItem
            onPress={() => console.log("Pressed")}
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
