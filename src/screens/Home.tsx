import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Header } from "../components/Header";
import { Avatar } from "../components/Avatar";
import RingVector from "../../assets/vectors/ring.svg";
import { colors } from "../theme/colors";
import { Input } from "../components/Input";
import { Card, iCard } from "../components/Card";
import { songs } from "mocs/songs";
import { activeIndex, standartHitSlop } from "theme/standart";

console.log(RingVector);

export const Home = () => {
  const pressFunc = () => {};

  const renderCardHorizontal = (element: iCard, index: number) => {
    return (
      <Card
        key={index}
        url={element.url}
        title={element.title}
        onPress={pressFunc}
        size="m"
      />
    );
  };
  const renderCardVertical = (element: iCard, index: number) => {
    return (
      <Card
        key={index}
        {...element}
        onPress={pressFunc}
        size="l"
        horizontal={true}
      />
    );
  };
  return (
    <ScrollView
      style={{ flex: 1 }}
      onScroll={() => {}}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.homePage}>
        <Header
          style={[styles.header]}
          left={
            <Avatar
              name="Avatar"
              description="movie"
              url="https://images3.alphacoders.com/690/690494.jpg"
            />
          }
          right={
            <TouchableOpacity
              activeOpacity={activeIndex}
              onPress={pressFunc}
              hitSlop={standartHitSlop}
            >
              {/* <RingVector width={22} height={22} color={colors.text} /> */}
            </TouchableOpacity>
          }
        />
        <View style={styles.listenContent}>
          <Text style={styles.listenText} numberOfLines={2}>
            Listen The Latest Musics
          </Text>

          <Input
            cursorColor={"hsla(360, 100%, 100%, 1.0)"}
            keyboardType={""}
            value={""}
            placeholder="Search Music"
            placeholderTextColor="#8E8E8E"
            style={styles.searchInp}
            // icon={<SearchVector width={18} height={18} color={colors.inpColor}
            // />}
          />
        </View>

        <View>
          <Text style={styles.recentlyText} numberOfLines={2}>
            Recently Played
          </Text>

          <ScrollView
            horizontal
            contentContainerStyle={{ gap: 16 }}
            style={{ marginTop: 16 }}
            showsHorizontalScrollIndicator={false}
          >
            <FlatList
              data={songs}
              contentContainerStyle={{ gap: 16 }}
              scrollEnabled={false}
              horizontal
              renderItem={({ item, index }) => (
                <Card
                  key={index}
                  url={item.url}
                  title={item.title}
                  onPress={pressFunc}
                  size="m"
                />
              )}
            />
          </ScrollView>
        </View>

        <Text style={styles.recomended}>Recommend for you</Text>
        <View style={styles.verticalBox}>
          <FlatList
            contentContainerStyle={{ gap: 16 }}
            data={songs}
            scrollEnabled={false}
            // removeClippedSubviews
            renderItem={({ item }) => <Card {...item} horizontal size="l" />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homePage: {
    width: 375,
    padding: 5,
    flex: 1,
  },
  header: {},
  wrapper: {
    borderWidth: 1,
    flex: 1,
    borderColor: "red",
    width: "auto",
    marginTop: 20,
  },
  listenContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  listenText: {
    fontFamily: "Nunito-SemiBold",
    width: "50%",
    fontSize: 26,
    color: colors.text,
  },
  searchInp: {
    height: "100%",
    paddingVertical: 11,
  },
  recentlyText: {
    marginTop: 48,
    width: undefined,
    fontSize: 22,
    color: colors.text,
  },
  verticalBox: {
    marginTop: 16,
    gap: 16,
  },
  recomended: {
    marginTop: 16,
    width: undefined,
    fontSize: 18,
    color: colors.text,
  },
});
