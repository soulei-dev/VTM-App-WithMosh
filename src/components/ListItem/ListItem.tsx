import React from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    ImageComponent,
} from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface ListItemProps {
    title: string;
    subTitle?: string;
    image?: any;
    onPress?: () => void;
    renderRightActions?: any;
    ImageComponent?: JSX.Element;
}

const ListItem = ({
    title,
    subTitle,
    image,
    onPress,
    renderRightActions,
    ImageComponent,
}: ListItemProps): JSX.Element => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && (
                            <AppText style={styles.subTitle}>
                                {subTitle}
                            </AppText>
                        )}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.gray,
    },
    detailsContainer: {
        justifyContent: "center",
        marginLeft: 10,
    },
});

export default ListItem;
