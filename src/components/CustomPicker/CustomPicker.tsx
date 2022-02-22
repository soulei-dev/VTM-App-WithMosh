import React, { FC, useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
    Modal,
    Button,
    FlatList,
    TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import CustomText from "../CustomText/CustomText";
import CustomScreen from "../CustomScreen/CustomScreen";
import CustomPickerItem from "../CustomPickerItem/CustomPickerItem";
import { SelectedItemState } from "../../typings/SelectedItemState";

type Props = {
    icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    items: any;
    onSelectedItem: any;
    placeholder: string;
    selectedItem: any;
};

const CustomPicker: FC<Props> = ({
    icon,
    items,
    onSelectedItem,
    placeholder,
    selectedItem,
}) => {
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
                    <CustomText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </CustomText>
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
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <CustomPickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectedItem(item);
                                }}
                            />
                        )}
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
