import React, { FC } from "react";
import { useFormikContext } from "formik";
import CustomPicker from "../../CustomPicker/CustomPicker";
import { CustomErrorMessage } from "..";

type Props = {
    name: string;
    items: any;
    placeholder: string;
};

const CustomFormPicker: FC<Props> = ({ items, placeholder, name }) => {
    const { errors, touched, values, setFieldValue } = useFormikContext();
    return (
        <>
            <CustomPicker
                icon="format-list-bulleted"
                items={items}
                selectedItem={values[name]}
                placeholder={placeholder}
                onSelectedItem={(item: any) => setFieldValue(name, item)}
            />
            <CustomErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default CustomFormPicker;
