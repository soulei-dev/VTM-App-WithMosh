import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import { Formik } from "formik";
import * as Yup from "yup";

import colors from "../../config/colors";
import CustomText from "../../components/CustomText/CustomText";
import CustomErrorMessage from "../../components/CustomErrorMessage/CustomErrorMessage";

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

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <CustomInput
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Email"
                            icon="email"
                        />
                        <CustomErrorMessage error={errors.email} />
                        <CustomInput
                            textContentType="password"
                            autoCorrect={false}
                            onChangeText={handleChange("password")}
                            autoCapitalize="none"
                            placeholder="Mot de passe"
                            secureTextEntry
                            icon="lock"
                        />
                        <CustomErrorMessage error={errors.password} />
                        <CustomButton
                            label="Connexion"
                            onPress={handleSubmit}
                            buttonColor={colors.primary}
                            labelColor={colors.white}
                        />
                    </>
                )}
            </Formik>
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
