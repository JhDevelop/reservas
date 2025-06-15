import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "../../components/navigation/TabBarIcon";
import { useColorScheme } from "../../hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#FFFFFF",
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 20,
          backgroundColor: colorScheme === "dark" ? "#1C1C1E" : "#FFFFFF",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          borderTopWidth: 0,
          paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              focused={focused}
              title="Inicio"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "map" : "map-outline"}
              focused={focused}
              title="Mapa"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              focused={focused}
              title="Ajustes"
            />
          ),
        }}
      />
    </Tabs>
  );
}
