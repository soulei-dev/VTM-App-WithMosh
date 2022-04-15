import React, { FC } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../config/colors";
import CustomText from "../CustomText/CustomText";

type Props = {
  imageUrl: string;
  title: string;
  price: number;
  city?: string;
  onPress: () => void;
};

const CustomCard: FC<Props> = ({ imageUrl, title, price, city, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.cardDetail}>
          <CustomText style={styles.title}>{title}</CustomText>
          <CustomText style={styles.price}>{`${price} €`}</CustomText>
          <View style={styles.city}>
            <Text style={styles.labelCity}>{city}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
