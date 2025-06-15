import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

export interface buttonProps {
  title: String;
  func: () => void;
}

export function ButtonPrimary({ title, func }: { title: String; func: () => void }) {
  return (
    <Pressable
      onPress={func}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#0a7ea4" : "rgb(210, 230, 255)",
        },
        styles.buttonPrimary,
      ]}
    >
      {({ pressed }) => <Text style={{ textAlign: "center",  color: pressed ? "white" : "#0a7ea4" }}>{title}</Text>}
    </Pressable>
  );
}

export function ButtonPrimaryIonicons({
  title,
  func,
  iconName,
}: {
  title: string;
  func: () => void;
  iconName: string;
}) {
  return (
    <Pressable
      onPress={func}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#0a7ea4" : "rgb(210, 230, 255)",
        },
        styles.buttonPrimary,
      ]}
    >
      {({ pressed }) => (
        <View style={styles.buttonContent}>
          {iconName && (
            <Ionicons
              name={ iconName== "heart" ? "heart": "heart-outline" }
              size={24}
              color={pressed ? "white" : "#0a7ea4" }
              style={styles.icon}
            />
          )}
          <Text style={{ color: pressed ? "white" : "#0a7ea4" }}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}


export function ButtonPrimaryAwesome({
  title,
  func,
  iconName,
  func1
}: {
  title: string;
  func: () => void;
  iconName?: string;
  func1: () => void;
}) {
  return (
    <Pressable
      onPress={()=>{ func(); func1(); }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#0a7ea4" : "rgb(210, 230, 255)",
        },
        styles.buttonPrimary,
      ]}
    >
      {({ pressed }) => (
        <View style={styles.buttonContent}>
          {iconName && (
            <FontAwesome6
              name={iconName}
              size={24}
              color={pressed ? "white" : "#0a7ea4" }
              style={styles.icon}
            />
          )}
          <Text style={{ color: pressed ? "white" : "#0a7ea4" }}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}



const styles = StyleSheet.create({
  buttonPrimary: {
    padding: 10,
    borderRadius: 20,
    width: 120,
  },
  buttonContent: {
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 6  },
});

