import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import ListItem from "../../components/ListItem/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator/ListItemSeparator";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import colors from "../../config/colors";

const MyAccountScreen = (): JSX.Element => {
    return (
        <CustomScreen>
            <View style={styles.userContainer}>
                <ListItem
                    image={require("../../assets/148327.jpg")}
                    title="Souleimane Kouygou"
                    subTitle="soo@dev.com"
                />
            </View>
            <CustomTabs
                iconName="format-list-bulleted"
                colorIcon={colors.white}
                bgColorIcon={colors.primary}
                title="Mes Listes"
            />
            <ListItemSeparator />
            <CustomTabs
                iconName="email"
                colorIcon={colors.white}
                bgColorIcon={colors.blueLight}
                title="Mes Messages"
            />
            <View style={styles.logout}>
                <CustomTabs
                    iconName="logout"
                    colorIcon={colors.white}
                    bgColorIcon={colors.yellow}
                    title="Déconnexion"
                />
            </View>
        </CustomScreen>
    );
};

const styles = StyleSheet.create({
    userContainer: {
        backgroundColor: colors.white,
        marginBottom: 35,
    },
    logout: {
        marginVertical: 35,
    },
});

export default MyAccountScreen;
