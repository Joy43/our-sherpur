import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import clsx from "clsx";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: any;
  focused: boolean;
}) => (
  <View
    className={clsx(
      "flex-row justify-center items-center rounded-full",
      focused ? "bg-[#E1E3FF]" : "bg-transparent"
    )}
  >
    <View
      className={clsx(
        "rounded-full w-12 h-12 flex justify-center items-center",
        focused ? "bg-[#6C63FF]" : "bg-transparent"
      )}
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
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
          headerShown: false, // Header is hidden for this tab
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="developer"
        options={{
          title: "About Us",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.developer} focused={focused} />
          ),
          headerShown: false, // Header is hidden for this tab
        }}
      />
    </Tabs>
  );
}
