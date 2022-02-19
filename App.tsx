import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import CustomCard from "./src/components/CustomCard/CustomCard";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen/ListingDetailsScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen/ViewImageScreen";
import MessagesScreen from "./src/screens/MessagesScreen/MessagesScreen";
import AccountScreen from "./src/screens/AccountScreen/AccountScreen";
import CustomIcon from "./src/components/CustomIcon/CustomIcon";
import CustomScreen from "./src/components/CustomScreen/CustomScreen";
import ListItem from "./src/components/ListItem/ListItem";
import ListingsScreen from "./src/screens/ListingsScreen/ListingsScreen";
import CustomInput from "./src/components/CustomInput/CustomInput";
import CustomPicker from "./src/components/CustomPicker/CustomPicker";

const categories = [
    { label: "Collections", value: 1 },
    { label: "Mangas", value: 2 },
    { label: "Goodies", value: 3 },
];

const App = (): JSX.Element => {
    return (
        <CustomScreen>
            <CustomPicker
                items={categories}
                icon="apps"
                placeholder="Category"
            />
            <CustomInput icon="email" placeholder="Email" />
        </CustomScreen>
    );
};

export default App;
