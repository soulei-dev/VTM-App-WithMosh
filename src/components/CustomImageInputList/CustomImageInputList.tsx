import React, { FC } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
} from "react-native";
import CustomImageInput from "../CustomImageInput/CustomImageInput";

type Props = {
    imageUris: any;
    onRemoveImage?: any;
    onAddImage?: any;
};

const CustomImageInputList: FC<Props> = ({
    imageUris = [],
    onRemoveImage,
    onAddImage,
}) => {
    return (
        <View style={styles.container}>
            {imageUris.map((uri: any) => (
                <View key={uri}>
                    <CustomImageInput
                        imageUri={uri}
                        onChangeImage={() => onRemoveImage(uri)}
                    />
                </View>
            ))}
            <CustomImageInput onChangeImage={(uri: any) => onAddImage(uri)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});

export default CustomImageInputList;
