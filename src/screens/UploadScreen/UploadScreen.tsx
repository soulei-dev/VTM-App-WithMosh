import React, { FC } from "react";
import { View, StyleSheet, Modal } from "react-native";
import CustomText from "../../components/CustomText/CustomText";

type Props = {
  progress: number;
  visible: boolean;
};

const UploadScreen: FC<Props> = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <CustomText>{progress * 100}%</CustomText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
