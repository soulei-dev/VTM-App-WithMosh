import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import CustomCard from "./src/components/CustomCard/CustomCard";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen/ListingDetailsScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen/ViewImageScreen";
import MessagesScreen from "./src/screens/MessagesScreen/MessagesScreen";
import MyAccountScreen from "./src/screens/MyAccountScreen/MyAccountScreen";
import CustomIcon from "./src/components/CustomIcon/CustomIcon";
import CustomScreen from "./src/components/CustomScreen/CustomScreen";
import ListItem from "./src/components/ListItem/ListItem";

const App = (): JSX.Element => {
    return (
        <CustomScreen>
            <ListItem
                title="title"
                subTitle="subtitle"
                ImageComponent={<CustomIcon name="email" />}
            />
        </CustomScreen>
    );
};

export default App;
