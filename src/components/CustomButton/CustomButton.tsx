import { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
    label: string;
    buttonColor: string;
    labelColor: string;
    onPress: () => void;
};

const CustomButton: FC<Props> = ({
    label,
    buttonColor,
    labelColor,
    onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: buttonColor }]}
        >
            <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: "100%",
        height: 50,
        marginVertical: 15,
    },
    label: {
        fontWeight: "bold",
        fontSize: 20,
        textTransform: "uppercase",
    },
});

export default CustomButton;
