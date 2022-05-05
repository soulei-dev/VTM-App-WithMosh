import React, { FC } from "react";
import Lottie from "lottie-react-native";
import { StyleSheet, View } from "react-native";

type Props = {
  visible: boolean;
};

const ActivityIndicator: FC<Props> = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <Lottie
        autoSize
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActivityIndicator;
