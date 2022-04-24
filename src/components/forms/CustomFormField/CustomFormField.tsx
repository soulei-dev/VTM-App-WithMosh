import React, { FC } from "react";

import { useFormikContext } from "formik";
import CustomInput, { CustomInputProps } from "../../CustomInput/CustomInput";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import { TextInputProps } from "react-native";

type Props = {
  name: string;
  width?: string | number;
} & TextInputProps &
  CustomInputProps;

const CustomFormField: FC<Props> = ({ name, width, ...props }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <CustomInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...props}
      />
      <CustomErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default CustomFormField;
