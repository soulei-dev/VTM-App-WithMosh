import React, { FC } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import ListItem from "../../components/ListItem/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator/ListItemSeparator";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import colors from "../../config/colors";
import CustomIcon from "../../components/CustomIcon/CustomIcon";

const menuItems = [
    {
        title: "Mes Listes",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "Mes Messages",
        icon: {
            name: "email",
            backgroundColor: colors.blueLight,
        },
    },
];

const AccountScreen: FC = () => {
    return (
        <CustomScreen>
            <View style={styles.container}>
                <ListItem
                    image={require("../../assets/148327.jpg")}
                    title="Souleimane Kouygou"
                    subTitle="soo@dev.com"
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
