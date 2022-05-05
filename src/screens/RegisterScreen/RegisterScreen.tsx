import React, { FC, useState } from "react";
import {
  CustomErrorMessage,
  CustomForm,
  CustomFormField,
  CustomSubmitButton,
} from "../../components/forms";
import { StyleSheet } from "react-native";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import * as Yup from "yup";
import usersApi from "../../api/users";
import authLogin from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen: FC = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authLogin.login);
  const auth = useAuth();
  const [error, setError] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const handleSumbit = async (userInfo: any) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) {
        setIsRegistered(true);
        setError(result.data.error);
      } else {
        setError("An unexpted error occurred.");
        console.log(result);
      }
      return;
    }
    setIsRegistered(false);

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <CustomScreen style={styles.container}>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <CustomForm
        onSubmit={handleSumbit}
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
        <CustomErrorMessage error={error} visible={isRegistered} />
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
