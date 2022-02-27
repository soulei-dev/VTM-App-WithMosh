import React, { FC, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import * as ImagePicker from "expo-image-picker";

type Props = {
    imageUri?: any;
    onChangeImage?: any;
};

const CustomImageInput: FC<Props> = ({ imageUri, onChangeImage }) => {
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!result.granted) {
            alert("Need access!");
        }
    };

    const handlePress = () => {
        if (!imageUri) selectedImage();
        else
            Alert.alert(
                "Supprimer",
                "Êtes-vous sûre de vouloir supprimer cette image ?",
                [
                    { text: "Oui", onPress: () => onChangeImage(null) },
                    { text: "Non" },
                ]
            );
    };

    const selectedImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
        });
        if (!result.cancelled) onChangeImage(result.uri);
    };
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <MaterialCommunityIcons
                        name="camera"
                        size={40}
                        color={colors.gray}
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
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
