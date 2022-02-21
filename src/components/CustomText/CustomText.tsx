import React, { FC } from "react";
import { Text } from "react-native";

import defaultStyles from "../../config/styles";

type Props = {
    children: React.ReactNode;
    style?: object;
};

const CustomText: FC<Props> = ({ children, style }) => {
    return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default CustomText;
