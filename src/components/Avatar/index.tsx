import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { colors } from "../../theme/colors";

interface iAvatar {
  url: string,
  name: string,
  description: string
}
export const Avatar: React.FC<iAvatar> = ({url,name,description}) => {
 
  return (
    <View style={styles.header}>
   <Image source={{uri: url}} style={styles.avatarImg}/>
      

      <View style={styles.textBox}>
        <Text style={styles.avatarName}>{name}</Text>
        <Text style={styles.avatarDesc}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    gap: 10,
    height: 70,
    width: "70%",
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 10

  },
  textBox: {
    height: 50,
    width: 170,
    display:'flex',
    rowGap: 3,
  },
  avatarName: {
    color: colors.text,
    width: 118,
    height: 20,
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
  },
  avatarDesc: {
    color: colors.avatarDesc,
    width: 104,
    height: 20,
    fontFamily: "Nunito-Regular",
    fontSize: 14
  },
});
