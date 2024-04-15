import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { ImageStyle } from "expo-image";
import { colors } from "theme/colors";

export interface iCard {
  title?: string;
  url?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  horizontal?: boolean;
  description?: string;
  size?: "s" | "m" | "l";
  singer?: string;
  imgProps?: StyleProp<ImageStyle>;
  vertical?: boolean;
}
export const Card: React.FC<iCard> = ({
  title,
  url,
  style,
  onPress,
  horizontal,
  description,
  size = "m",
  singer,
  vertical,
}) => {
  const textItems = title || description || singer;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.root, horizontal && styles.horizontal, style]}
    >
      <Image
        source={{ uri: url }}
        width={105}
        height={100}
        style={[styles[size], styles.image]}
      />
      {textItems ? (
        <View style={[styles.textBox, horizontal && styles.maxWidth]}>
          {title ? (
            <Text
              numberOfLines={2}
              style={[styles.title, size == "s" && styles.largeTitle]}
            >
              {title}
            </Text>
          ) : null}
          {singer ? (
            <Text numberOfLines={2} style={[styles.title, styles.singer]}>
              {singer}
            </Text>
          ) : null}
          {description ? (
            <Text numberOfLines={2} style={[styles.title, styles.singer]}>
              {description}
            </Text>
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    // flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  image: {
    borderRadius: 10,
  },

  s: {
    width: 88,
    height: 88,
  },
  m: {
    width: 101,
    height: 81,
  },
  l: {
    width: 106,
    height: 111,
  },
  textBox: {
    gap: 5,
    maxWidth: 105
  },
  maxWidth: {
    maxWidth: "auto",
    flex: 1
  },
  title: {
    color: colors.text,

    fontFamily: "Nunito-Regular",
    fontSize: 14,
  },
  largeTitle: {
    fontSize: 17,
  },
  singer: {
    fontSize: 13,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
