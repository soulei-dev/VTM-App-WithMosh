import React, { FC } from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";

const WelcomeScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        source={require("../../assets/monde_anime_bg.jpeg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/logo.png")} />
          <Text style={styles.textLogo}>Vends ton manga</Text>
        </View>
        <CustomButton
          label="Login"
          buttonColor={colors.primary}
          labelColor={colors.secondary}
          onPress={() => navigation.navigate("Login")}
          width="90%"
        />
        <CustomButton
          label="Register"
          buttonColor={colors.secondary}
          labelColor={colors.black}
          onPress={() => navigation.navigate("Register")}
          width="90%"
        />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    top: 50,
    position: "absolute",
  },
  textLogo: {
    marginTop: -20,
    marginLeft: 20,
    fontSize: 30,
    color: colors.primary,
    backgroundColor: "white",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
});

export default WelcomeScreen;
