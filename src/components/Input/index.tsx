import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { colors } from "theme/colors";

interface iInput {
  value: string;
  placeholder: string;
  placeholderTextColor: string;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  keyboardType?: any;
  cursorColor?: string;
}
export const Input: React.FC<iInput> = ({
  value,
  placeholder,
  placeholderTextColor,
  icon,
  style,
  keyboardType,
  cursorColor,
}) => {
  const [ focused,SetFocused] = useState<boolean>()
  return (
    <View style={[styles.root,focused ? {borderColor: colors.primpary}: null ]}>
      {icon ? icon : null}
      <TextInput
        onChange={() => {}}
        onFocus={() => {
          
          SetFocused(true)
          
        }}
        onBlur={() => {
          SetFocused(false)
        }}
        value={value}
        style={style}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        cursorColor={cursorColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 22,
    maxHeight: 50,
  },
});
