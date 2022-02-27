import React, { FC, useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
    const scrollView: any = useRef();
    return (
        <View>
            <ScrollView
                horizontal
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container}>
                    {imageUris.map((uri: any) => (
                        <View key={uri}>
                            <CustomImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                    <CustomImageInput
                        onChangeImage={(uri: any) => onAddImage(uri)}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});

export default CustomImageInputList;
