import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import CustomCard from "./src/components/CustomCard/CustomCard";
import { SafeAreaView, StyleSheet, View } from "react-native";

const App = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <CustomCard
                    image={require("./src/assets/image.jpeg")}
                    title="One piece collection"
                    price={30}
                    city="Antibes 06600"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f4f4f4",
    },
    card: {
        alignItems: "center",
    },
});

export default App;
