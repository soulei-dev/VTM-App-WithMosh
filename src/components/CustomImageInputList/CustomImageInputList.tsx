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
};

const CustomImageInputList: FC<Props> = ({ imageUris, onRemoveImage }) => {
    return (
        <View style={styles.container}>
            {imageUris && (
                <FlatList
                    horizontal
                    data={imageUris}
                    keyExtractor={(imageUri) => imageUri.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback onPress={onRemoveImage}>
                            <CustomImageInput imageUri={item.imageUri} />
                        </TouchableWithoutFeedback>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default CustomImageInputList;
