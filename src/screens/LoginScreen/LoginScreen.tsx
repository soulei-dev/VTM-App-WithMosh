import React, { FC, useState } from "react";
import { Image, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import colors from "../../config/colors";

const LoginScreen: FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <CustomScreen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo.png")}
            />
            <CustomInput
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
                icon="email"
            />
            <CustomInput
                textContentType="password"
                autoCorrect={false}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
                placeholder="Mot de passe"
                secureTextEntry
                icon="lock"
            />
            <CustomButton
                label="Connexion"
                onPress={() => console.log(email, password)}
                buttonColor={colors.primary}
                labelColor={colors.white}
            />
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
