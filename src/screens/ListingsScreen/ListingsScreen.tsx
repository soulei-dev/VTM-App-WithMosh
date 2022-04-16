import React, { FC, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import CustomCard from "../../components/CustomCard/CustomCard";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import { useNavigation } from "@react-navigation/native";
import listingsApi from "../../api/listings";
import routes from "../../navigation/routes";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomText from "../../components/CustomText/CustomText";
import colors from "../../config/colors";

type Props = {
  route: any;
};

interface ListingsProps {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const ListingsScreen: FC<Props> = () => {
  const navigation = useNavigation();
  const [listings, setListings] = useState<ListingsProps[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    console.log(response.data);
    setError(false);
    setListings(response.data);
  };

  return (
    <CustomScreen style={styles.screen}>
      {error && (
        <>
          <CustomText style={styles.errorMessage}>
            Couldn't retrieve the listings.
          </CustomText>
          <CustomButton
            label="Retry"
            labelColor="white"
            buttonColor={colors.primary}
            onPress={loadListings}
          />
        </>
      )}
      <ActivityIndicator animating={loading} size="large" />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }: any) => (
          <CustomCard
            title={item.title}
            price={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)}
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
  errorMessage: {
    textAlign: "center",
  },
});

export default ListingsScreen;
