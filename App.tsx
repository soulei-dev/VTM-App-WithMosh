import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import CustomCard from "./src/components/CustomCard/CustomCard";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen/ListingDetailsScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen/ViewImageScreen";

const App = (): JSX.Element => {
    return <ViewImageScreen />;
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f4f4f4",
    },
});

export default App;
