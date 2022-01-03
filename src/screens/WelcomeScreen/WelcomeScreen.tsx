import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from "react-native";

const WelcomeScreen = (): JSX.Element => {
  console.log(Dimensions.get("screen"));
  return (
    <>
      <ImageBackground
        source={require("../../../assets/monde_anime_bg.jpeg")}
        resizeMode="cover"
        style={styles.background}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.textLogo}>Done With Manga</Text>
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
  logo: {
    position: "absolute",
    top: 50,
  },
  textLogo: {
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    top: 150,
  },
});

export default WelcomeScreen;
