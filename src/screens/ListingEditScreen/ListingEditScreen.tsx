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
import CustomCategoryPickerItem from "../../components/CustomCategoryPickerItem/CustomCategoryPickerItem";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
});

const categories = [
    { label: "Mangas", value: 1, backgroundColor: "#eaa6a6", icon: "apps" },
    {
        label: "Collections",
        value: 2,
        backgroundColor: "#a392e8",
        icon: "apps",
    },
    { label: "Goodies", value: 3, backgroundColor: "#92e89d", icon: "apps" },
    { label: "Category", value: 4, backgroundColor: "#dc92e8", icon: "apps" },
    { label: "Category", value: 5, backgroundColor: "#e8e092", icon: "apps" },
    { label: "Category", value: 6, backgroundColor: "#92e5e8", icon: "apps" },
    { label: "Category", value: 7, backgroundColor: "#e8cf92", icon: "apps" },
    { label: "Category", value: 8, backgroundColor: "#92e89d", icon: "apps" },
    { label: "Category", value: 9, backgroundColor: "#92e89d", icon: "apps" },
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
                    numberOfColumns={3}
                    CustomPickerItemComponent={CustomCategoryPickerItem}
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
