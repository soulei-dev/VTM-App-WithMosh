import React, { FC, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import CustomCard from "../../components/CustomCard/CustomCard";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import { useNavigation } from "@react-navigation/native";
import listingsApi from "../../api/listings";
import routes from "../../navigation/routes";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomText from "../../components/CustomText/CustomText";
import colors from "../../config/colors";
import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";
import useApi from "../../hooks/useApi";

type Props = {
  route: any;
};

const ListingsScreen: FC<Props> = () => {
  const navigation = useNavigation();
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

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
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }: any) => (
          <CustomCard
            title={item.title}
            price={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
