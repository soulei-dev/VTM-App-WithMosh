import React, { FC } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    ImageSourcePropType,
    Animated,
} from "react-native";
import colors from "../../config/colors";
import CustomText from "../CustomText/CustomText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
    title: string;
    subTitle?: string;
    image?: ImageSourcePropType;
    onPress?: () => void;
    renderRightActions?: (
        progressAnimatedValue: Animated.Value | Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
    ) => React.ReactNode;
    IconComponent?: JSX.Element;
    showChevron?: boolean;
};

const ListItem: FC<Props> = ({
    title,
    subTitle,
    image,
    onPress,
    renderRightActions,
    IconComponent,
    showChevron,
}) => {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}
                >
                    <View style={styles.container}>
                        <View style={styles.content}>
                            {IconComponent}
                            {image && (
                                <Image style={styles.image} source={image} />
                            )}
                            <View style={styles.detailsContainer}>
                                <CustomText style={styles.title}>
                                    {title}
                                </CustomText>
                                {subTitle && (
                                    <CustomText style={styles.subTitle}>
                                        {subTitle}
                                    </CustomText>
                                )}
                            </View>
                        </View>
                        {showChevron ? (
                            <View style={styles.chevronIcon}>
                                <MaterialCommunityIcons
                                    name="chevron-right"
                                    color={colors.gray}
                                    size={25}
                                />
                            </View>
                        ) : null}
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    content: {
        flexDirection: "row",
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
    chevronIcon: {
        justifyContent: "center",
    },
});

export default ListItem;
