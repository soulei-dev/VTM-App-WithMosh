import React, { FC, useState } from "react";
import { FlatList, View } from "react-native";
import CustomScreen from "../../components/CustomScreen/CustomScreen";
import ListItem from "../../components/ListItem/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction/ListItemDeleteAction";

let initialMessages = [
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

const MessagesScreen: FC = () => {
    const [messages, setMessages] = useState<any>(initialMessages);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const handleDelete = (message: any) => {
        setMessages(
            messages.filter((m: { id: number }) => m.id !== message.id)
        );
    };
    return (
        <CustomScreen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        showChevron
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../../assets/219857.png"),
                        },
                    ]);
                }}
            />
        </CustomScreen>
    );
};

export default MessagesScreen;
