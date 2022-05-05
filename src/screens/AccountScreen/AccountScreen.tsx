import React, { FC } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../../components/ListItem/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator/ListItemSeparator";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import colors from "../../config/colors";
import CustomIcon from "../../components/CustomIcon/CustomIcon";
import { useNavigation } from "@react-navigation/native";
import routes from "../../navigation/routes";
import useAuth from "../../hooks/useAuth";

const menuItems = [
  {
    title: "Mes Listes",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "MyLists",
  },
  {
    title: "Mes Messages",
    icon: {
      name: "email",
      backgroundColor: colors.blueLight,
    },
    targetScreen: routes.MESSAGES,
  },
];

const AccountScreen: FC = () => {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();

  return (
    <CustomScreen>
      <View style={styles.container}>
        <ListItem
          image={require("../../assets/148327.jpg")}
          title={user.name}
          subTitle={user.email}
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <CustomIcon
                  name={item.icon.name}
                  size={35}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title="Déconnexion"
          IconComponent={
            <CustomIcon
              name="logout"
              backgroundColor={colors.yellow}
              size={35}
            />
          }
          onPress={() => logOut()}
        />
      </View>
    </CustomScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  logout: {
    marginVertical: 35,
  },
});

export default AccountScreen;
