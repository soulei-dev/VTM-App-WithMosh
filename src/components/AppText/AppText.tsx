import React from "react";
import { Text } from "react-native";

import defaultStyles from "../../config/styles";

interface AppTextProps {
    children: string | number;
    style?: object;
}

const AppText = ({ children, style }: AppTextProps): JSX.Element => {
    return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
