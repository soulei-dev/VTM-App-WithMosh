import React, { FC } from "react";
import { StyleSheet } from "react-native";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import {
    CustomForm,
    CustomFormField as FormField,
    CustomFormPicker as Picker,
    CustomSubmitButton,
} from "../../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
});

const categories = [
    { label: "Mangas", value: 1 },
    { label: "Collections", value: 2 },
    { label: "Goodies", value: 3 },
];

const ListingEditScreen: FC = () => {
    return (
        <CustomScreen style={styles.container}>
            <CustomForm
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
                initialValues={{
                    title: "",
                    price: "",
                    category: null,
                    description: "",
                }}
            >
                <FormField
                    name="title"
                    autoCapitalize="sentences"
                    placeholder="Titre"
                    autoCorrect={false}
                    maxLength={255}
                />
                <FormField
                    name="price"
                    keyboardType="numeric"
                    placeholder="Prix"
                    maxLength={8}
                    width={120}
                />
                <Picker
                    name="category"
                    items={categories}
                    placeholder="Category"
                    width="50%"
                />
                <FormField
                    name="description"
                    multiline
                    autoCorrect={false}
                    maxLength={255}
                    numberOfLines={3}
                    placeholder="Description"
                />
                <CustomSubmitButton title="Poster" />
            </CustomForm>
        </CustomScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default ListingEditScreen;
