import React, { FC } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

type Props = {
    imageUri?: any;
    onAddImage?: any;
};

const CustomImageInput: FC<Props> = ({ imageUri, onAddImage }) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onAddImage}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <MaterialCommunityIcons
                        name="camera"
                        size={40}
                        color={colors.gray}
                    />
                )}
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: "#F7F4F4",
        width: 80,
        height: 80,
        borderRadius: 15,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default CustomImageInput;
