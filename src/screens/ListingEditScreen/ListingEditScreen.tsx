import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import {
  CustomForm,
  CustomFormField as FormField,
  CustomFormPicker as Picker,
  CustomSubmitButton,
  CustomFormImagePicker as FormImagePicker,
} from "../../components/forms";
import CustomCategoryPickerItem from "../../components/CustomCategoryPickerItem/CustomCategoryPickerItem";
import * as Yup from "yup";
import useLocation from "../../hooks/useLocation";
import listingsApi from "../../api/listings";
import UploadScreen from "../UploadScreen/UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array()
    .min(1, "Veuillez selectionner au moins une image")
    .label("Images"),
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
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleSubmit = async (listing: any, { resetForm }: any) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress: any) => setProgress(progress)
    );

    if (!result.ok) return alert("Impossible de sauvegarder la liste.");

    resetForm();
  };
  return (
    <CustomScreen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <CustomForm
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
      >
        <FormImagePicker name="images" />
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
