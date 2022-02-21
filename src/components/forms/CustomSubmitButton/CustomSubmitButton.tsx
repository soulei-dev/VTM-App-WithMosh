import React, { FC } from "react";
import { useFormikContext } from "formik";

import CustomButton from "../../CustomButton/CustomButton";
import colors from "../../../config/colors";

type Props = {
    title: string;
};

const CustomSubmitButton: FC<Props> = ({ title }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <CustomButton
            label={title}
            onPress={handleSubmit}
            buttonColor={colors.primary}
            labelColor={colors.white}
        />
    );
};

export default CustomSubmitButton;
