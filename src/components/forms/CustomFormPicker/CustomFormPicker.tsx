import React, { FC } from "react";
import { useFormikContext } from "formik";
import CustomPicker from "../../CustomPicker/CustomPicker";
import { CustomErrorMessage } from "..";

type Props = {
    CustomPickerItemComponent: any;
    name: string;
    items: any;
    numberOfColumns: number;
    placeholder: string;
    width?: string | number;
};

const CustomFormPicker: FC<Props> = ({
    CustomPickerItemComponent,
    items,
    numberOfColumns,
    placeholder,
    name,
    width,
}) => {
    const { errors, touched, values, setFieldValue }: any = useFormikContext();
    return (
        <>
            <CustomPicker
                CustomPickerItemComponent={CustomPickerItemComponent}
                icon="format-list-bulleted"
                items={items}
                selectedItem={values[name]}
                numberOfColumns={numberOfColumns}
                placeholder={placeholder}
                onSelectedItem={(item: any) => setFieldValue(name, item)}
                width={width}
            />
            <CustomErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default CustomFormPicker;
