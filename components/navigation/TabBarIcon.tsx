import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

type TabBarIconProps = {
  focused: boolean;
  title: string;
  iconStyle?: ViewStyle;
} & IconProps<ComponentProps<typeof Ionicons>["name"]>;

export function TabBarIcon({
  focused,
  title,
  iconStyle,
  ...rest
}: TabBarIconProps) {
  return (
    <View style={[styles.container, iconStyle]}>
      <View style={styles.horizontalContainer}>
        <View style={[
          styles.iconWrapper,
          focused && styles.focusedIconWrapper
        ]}>
          <Ionicons 
            size={32}
            style={styles.icon}
            color={focused ? "#191919" : "#8E8E93"}
            {...rest}
          />
        <Text style={[
          styles.title,
          { 
            color: focused ? "#191919" : "#8E8E93",
            opacity: focused ? 1 : 0.7
          }
        ]}>
          { focused ? title : ""}
        </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    minWidth: 100,
    paddingHorizontal: 12,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  iconWrapper: {
    width: '140%',
    marginTop: 20,
    padding: 4,
    paddingHorizontal: 20,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
  },
  focusedIconWrapper: {
    flexDirection: 'row',
    backgroundColor: "rgba(255, 215, 0, 0.5)",
  },
  icon: {
  },
  title: {
    paddingLeft: 4,
    fontSize: 18,
    fontWeight: "500",
    includeFontPadding: false,
  },
});
