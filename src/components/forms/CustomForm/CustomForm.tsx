import React, { FC } from "react";
import { Formik } from "formik";

type Props = {
    onSubmit: (value: any) => void;
    initialValues: any;
    validationSchema: any;
    children: React.ReactNode;
};

const CustomForm: FC<Props> = ({
    onSubmit,
    initialValues,
    validationSchema,
    children,
}) => {
    return (
        <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
        >
            {() => <>{children}</>}
        </Formik>
    );
};

export default CustomForm;
