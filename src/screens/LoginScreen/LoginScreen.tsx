import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import * as Yup from "yup";

import {
    CustomForm,
    CustomFormField,
    CustomSubmitButton,
} from "../../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen: FC = () => {
    return (
        <CustomScreen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo.png")}
            />

            <CustomForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <CustomFormField
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Email"
                    name="email"
                    icon="email"
                />
                <CustomFormField
                    textContentType="password"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Mot de passe"
                    secureTextEntry
                    name="password"
                    icon="lock"
                />
                <CustomSubmitButton title="Connexion" />
            </CustomForm>
        </CustomScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;
