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
    CustomPickerItemComponent: any;
    numberOfColumns: number;
    placeholder: string;
    selectedItem: any;
    width?: string | number;
};

const CustomPicker: FC<Props> = ({
    icon,
    items,
    onSelectedItem,
    CustomPickerItemComponent = CustomPickerItem,
    numberOfColumns = 1,
    placeholder,
    selectedItem,
    width = "100%",
}) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            style={styles.icon}
                            color={colors.medium}
                        />
                    )}
                    {selectedItem ? (
                        <CustomText style={styles.text}>
                            {selectedItem.label}
                        </CustomText>
                    ) : (
                        <CustomText style={styles.placeholder}>
                            {placeholder}
                        </CustomText>
                    )}
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
                        numColumns={numberOfColumns}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <CustomPickerItemComponent
                                item={item}
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
    placeholder: {
        color: colors.grayLight,
        flex: 1,
    },
});

export default CustomPicker;
