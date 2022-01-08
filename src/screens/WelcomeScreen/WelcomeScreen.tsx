import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";

import colors from "../../config/colors";

const WelcomeScreen = (): JSX.Element => {
  return (
    <>
      <ImageBackground
        source={require("../../../assets/monde_anime_bg.jpeg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../../../assets/logo.png")} />
          <Text style={styles.textLogo}>Vends ton manga</Text>
        </View>
        <CustomButton
          label="Login"
          buttonColor={colors.primary}
          labelColor={colors.secondary}
          onPress={() => console.log("Login")}
        />
        <CustomButton
          label="Register"
          buttonColor={colors.secondary}
          labelColor={colors.black}
          onPress={() => console.log("Register")}
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
