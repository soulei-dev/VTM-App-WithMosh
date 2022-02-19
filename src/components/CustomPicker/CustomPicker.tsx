import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
    Modal,
    Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import CustomText from "../CustomText/CustomText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import CustomScreen from "../CustomScreen/CustomScreen";

interface CustomPickerProps {
    icon?: any;
    placeholder: string;
}

const CustomPicker = ({
    icon,
    placeholder,
    ...props
}: CustomPickerProps): JSX.Element => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            style={styles.icon}
                            color={colors.medium}
                        />
                    )}
                    <CustomText style={styles.text}>{placeholder}</CustomText>
                    {icon && (
                        <MaterialCommunityIcons
                            name="chevron-down"
                            size={20}
                            color={colors.medium}
                        />
                    )}
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <CustomScreen>
                    <Button
                        title="Fermer"
                        onPress={() => setModalVisible(false)}
                    />
                </CustomScreen>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 25,
        flexDirection: "row",
        backgroundColor: "#F7F4F4",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
});

export default CustomPicker;
