import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      backgroundColor: focused ? "#E1E3FF" : "transparent",
    }}
  >
    <View
      style={{
        borderRadius: 50,
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: focused ? "#6C63FF" : "transparent",
      }}
    >
      <Image
        source={source}
        style={{ width: 28, height: 28, tintColor: "white" }}
        resizeMode="contain"
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          marginHorizontal: 16,
          marginBottom: 16,
          height: 72,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="developer"
        options={{
          title: "About Us",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.developer} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
