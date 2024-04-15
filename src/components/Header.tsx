import React from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import Ring from "../../assets/vectors/Ring.svg"
import { colors } from "theme/colors";

interface iHeader {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftOnPress?: () => void;
  rightOnPress?: () => void;
  style?: StyleProp<ViewStyle>
}

export const Header: React.FC<iHeader> = ({
  title,
  left,
  right,
  leftOnPress,
  rightOnPress,
  style
}) => {
  return (
    <View style={[styles.header,style]}>
      {left ? left : null}

      
        {title ? <Text >{title}</Text> : null}
      

    {/* <Pressable  onPress={rightOnPress}> */}

    {right ? right : null}
    
    
    {/* </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "white",
  },
});
