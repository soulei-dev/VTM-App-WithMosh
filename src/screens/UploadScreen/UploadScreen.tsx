import React, { FC } from "react";
import { View, StyleSheet, Modal } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import * as Progress from "react-native-progress";
import Lottie from "lottie-react-native";
import colors from "../../config/colors";

type Props = {
  onDone: () => void;
  progress: number;
  visible: boolean;
};

const UploadScreen: FC<Props> = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <Lottie
            autoPlay
            autoSize
            loop={false}
            onAnimationFinish={onDone}
            source={require("../../assets/animations/done.json")}
          />
        )}
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
