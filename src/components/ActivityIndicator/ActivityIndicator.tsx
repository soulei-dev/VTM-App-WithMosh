import React, { FC } from "react";
import Lottie from "lottie-react-native";
import { StyleSheet, View } from "react-native";

type Props = {
  visible: boolean;
};

const ActivityIndicator: FC<Props> = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.lottieView}>
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
  lottieView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActivityIndicator;
