import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from "react-native";

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
          <Text style={styles.textLogo}>Done With Manga</Text>
        </View>
        <View style={styles.loginButton} />
        <View style={styles.registerButton} />
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
  loginButton: {
    backgroundColor: "#098EF1",
    width: "100%",
    height: 70,
  },
  registerButton: {
    backgroundColor: "#fff",
    width: "100%",
    height: 70,
  },
  logoContainer: {
    alignItems: "center",
    top: 50,
    position: "absolute",
  },
  textLogo: {
    marginTop: -20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default WelcomeScreen;
