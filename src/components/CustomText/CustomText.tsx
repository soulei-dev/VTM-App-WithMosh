import React from "react";
import { Text } from "react-native";

import defaultStyles from "../../config/styles";

interface CustomTextProps {
    children: string | number;
    style?: object;
}

const CustomText = ({ children, style }: CustomTextProps): JSX.Element => {
    return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default CustomText;
