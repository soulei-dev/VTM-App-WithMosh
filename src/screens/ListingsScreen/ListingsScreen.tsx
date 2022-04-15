import React, { FC, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import CustomCard from "../../components/CustomCard/CustomCard";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import { useNavigation } from "@react-navigation/native";
import listingsApi from "../../api/listings";
import routes from "../../navigation/routes";

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

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    console.log(response.data);
    setListings(response.data);
  };

  return (
    <CustomScreen style={styles.screen}>
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
});

export default ListingsScreen;
