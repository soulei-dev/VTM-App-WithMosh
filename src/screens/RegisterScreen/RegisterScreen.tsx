import React, { FC } from "react";
import {
    CustomForm,
    CustomFormField,
    CustomSubmitButton,
} from "../../components/forms";
import { StyleSheet } from "react-native";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen: FC = () => {
    return (
        <CustomScreen style={styles.container}>
            <CustomForm
                onSubmit={(values) => console.log(values)}
                initialValues={{ name: "", email: "", password: "" }}
                validationSchema={validationSchema}
            >
                <CustomFormField
                    icon="account"
                    name="name"
                    placeholder="Name"
                    autoCorrect={false}
                    autoCapitalize="sentences"
                />
                <CustomFormField
                    icon="email"
                    name="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    textContentType="emailAddress"
                />
                <CustomFormField
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                />
                <CustomSubmitButton title="S'enregistrer" />
            </CustomForm>
        </CustomScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default RegisterScreen;
