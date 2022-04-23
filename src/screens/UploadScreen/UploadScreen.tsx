import React, { FC } from "react";
import { View, StyleSheet, Modal } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import * as Progress from "react-native-progress";
import colors from "../../config/colors";

type Props = {
  progress: number;
  visible: boolean;
};

const UploadScreen: FC<Props> = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={colors.primary} width={200} />
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
