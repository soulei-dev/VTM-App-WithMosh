import React, { FC, useState } from "react";
import { Image, StyleSheet } from "react-native";
import authLogin from "../../api/auth";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import authStorage from "../../auth/storage";

import {
  CustomErrorMessage,
  CustomForm,
  CustomFormField,
  CustomSubmitButton,
} from "../../components/forms";
import { useContext } from "react";
import AuthContext from "../../auth/context";
import useAuth from "../../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen: FC = () => {
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const { logIn } = useAuth();

  const handleSubmit = async ({ email, password }: any) => {
    const result = await authLogin.login(email, password);

    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <CustomScreen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />

      <CustomForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
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
        <CustomErrorMessage
          error="Email et/ou mot de passe incorrecte."
          visible={loginFailed}
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
