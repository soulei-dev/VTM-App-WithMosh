import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CustomButtonProps {
  label: string;
  buttonColor: string;
  labelColor: string;
  onPress: () => void;
}

const CustomButton = ({
  label,
  buttonColor,
  labelColor,
  onPress,
}: CustomButtonProps): JSX.Element => {
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
    width: "90%",
    height: 50,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
  },
});

export default CustomButton;
