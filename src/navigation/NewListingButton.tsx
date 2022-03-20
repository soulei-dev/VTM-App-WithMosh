import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

const NewListingButton: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    bottom: 20,
    borderWidth: 10,
    borderColor: colors.white,
    borderRadius: 40,
    height: 80,
    width: 80,
  },
});

export default NewListingButton;
