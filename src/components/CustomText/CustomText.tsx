import React, { FC } from "react";
import { Text, TextProps } from "react-native";

import defaultStyles from "../../config/styles";

type Props = {
    children: React.ReactNode;
    style?: object;
} & TextProps;

const CustomText: FC<Props> = ({ children, style, ...props }) => {
    return (
        <Text style={[defaultStyles.text, style]} {...props}>
            {children}
        </Text>
    );
};

export default CustomText;
