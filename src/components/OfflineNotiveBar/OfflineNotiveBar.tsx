import React, { FC } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import colors from "../../config/colors";
import CustomText from "../CustomText/CustomText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotiveBar: FC = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <SafeAreaView style={styles.container}>
        <CustomText style={styles.label}>No Internet Connection</CustomText>
      </SafeAreaView>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  label: {
    color: colors.white,
  },
});

export default OfflineNotiveBar;
