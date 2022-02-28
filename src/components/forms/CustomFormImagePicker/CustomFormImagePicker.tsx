import { useFormikContext } from "formik";
import React, { FC } from "react";
import { CustomErrorMessage } from "..";
import CustomImageInputList from "../../CustomImageInputList/CustomImageInputList";

type Props = {
    name: string;
};

const CustomFormImagePicker: FC<Props> = ({ name }) => {
    const { errors, setFieldValue, touched, values }: any = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri: any) => {
        setFieldValue(name, [...imageUris, uri]);
    };

    const handleRemove = (uri: any) => {
        setFieldValue(
            name,
            imageUris.filter((imageUri: any) => imageUri !== uri)
        );
    };
    return (
        <>
            <CustomImageInputList
                imageUris={imageUris}
                onRemoveImage={handleRemove}
                onAddImage={handleAdd}
            />
            <CustomErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default CustomFormImagePicker;
