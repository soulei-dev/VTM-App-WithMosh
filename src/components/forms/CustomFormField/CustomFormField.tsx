import React, { FC } from "react";

import { useFormikContext } from "formik";
import CustomInput, { CustomInputProps } from "../../CustomInput/CustomInput";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import { TextInputProps } from "react-native";

type Props = {
    name: string;
} & TextInputProps &
    CustomInputProps;

const CustomFormField: FC<Props> = ({ name, ...props }) => {
    const { setFieldTouched, handleChange, errors, touched } =
        useFormikContext();
    return (
        <>
            <CustomInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...props}
            />
            <CustomErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default CustomFormField;
