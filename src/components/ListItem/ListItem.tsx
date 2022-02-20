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
};

const ListItem: FC<Props> = ({
    title,
    subTitle,
    image,
    onPress,
    renderRightActions,
    IconComponent,
}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <CustomText style={styles.title}>{title}</CustomText>
                        {subTitle && (
                            <CustomText style={styles.subTitle}>
                                {subTitle}
                            </CustomText>
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
        backgroundColor: colors.white,
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
