import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../../components/Screen/Screen";
import ListItem from "../../components/ListItem/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction/ListItemDeleteAction";

let message = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../../assets/148327.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../../assets/219857.png"),
    },
];

const MessagesScreen = (): JSX.Element => {
    return (
        <Screen>
            <FlatList
                data={message}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={ListItemDeleteAction}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
};

export default MessagesScreen;
